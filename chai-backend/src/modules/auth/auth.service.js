import ApiError from "../../common/utils/api-error.js"
import { generateAccessToken, generateRefreshToken, generateResetToken, verifyRefreshToken } from "../../common/utils/jwt.util.js"
import User from "./auth.model.js"
import crypto from "crypto"

const hashToken = (token) => 
    crypto.createHash("sha256").update(token).digest("hex")

const register = async ({name, email, password, role}) => {


    const existing = await User.findOne({email})
    if(existing) throw ApiError.conflict("Email already exists")

    const {rawToken, hashedToken} = generateResetToken()

    const user = await User.create({
        name,
        email,
        password,
        role,
        verificationToken: hashedToken 
    })

    // TODO: send an email to user with token : rawToken

    const userObj = user.toObject()
    delete userObj.password
    delete userObj.verificationToken

    return userObj
}

const login = async ({email, password}) => {
    // take email and find user in DB
    // then check if password is correct 
    // check if verified or not 

    const user = await User.findOne({email}).select("+password")
    if(!user) throw ApiError.unauthorized("Invalid email or password")

    // somehow i will check password
    const isMatch = await user.comparePassword(password)
    if(!isMatch) throw ApiError.unauthorized("Invalid Password")

    if(!user.isVerified){
        throw ApiError.forbidden("Please verify your email before login")
    }

    const accessToken = generateAccessToken({id: user._id, role: user.role})
    const refreshToken = generateRefreshToken({id: user._id})

    user.refreshToken = hashToken(refreshToken)
    await user.save({validateBeforeSave: false})

    const userObj = user.toObject()
    delete userObj.password
    delete userObj.refreshToken

    return {user: userObj, accessToken, refreshToken}

}

const refresh = async(token) =>{
    if(!token) throw ApiError.unauthorized("Refresh token missing")
    const decoded = verifyRefreshToken(token)

    const user = await User.findById(decoded.id).select("+refreshToken")
    if(!user) throw ApiError.unauthorized("User not found")

    if(user.refreshToken !== hashToken(token)){
        throw ApiError.unauthorized("Invalid refrsh token")
    } 

    const accessToken = generateAccessToken({id:user._id, role: user.role});

    return {accessToken}
}

const logout = async(userId) => {
    // const user = await User.findById(userId);
    // if(!user) throw ApiError.unauthorized("User not found");

    // user.refreshToken = undefined;
    // await user.save({validateBeforeSave: false});

    await User.findByIdAndUpdate(userId, {refreshToken: null})
}

const forgotPassword = async(email) => {
    const user = await User.findOne({email})
    if(!user) throw ApiError.notFound("email Not exist");

    const {rawToken, hashToken} = generateResetToken()
    user.resetPasswordToken = hashToken
    user.resetPasswordExpires = Date.now() + 15 *60 * 1000

    await user.save()

    // TODO : Mail Bhejna nahi aata

}

const getMe = async(userId) => {
    const user = await User.findById(userId)
    if(!user) throw ApiError.notFound("User Not Found");
    return user;
};

export{register, login, refresh, logout, forgotPassword, getMe}