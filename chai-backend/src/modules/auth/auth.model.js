import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        trim: true,
        minlength: 2,
        maxlength: 50,
        required: [true, "Name is required"]
    },

    email : {
        type : String,
        trim: true,
        
        required: [true, "email is required"],
        unique: true,
        lowecase:true
    },

    password : {
        type: String,
        required: [true, "Password is required"],
        minlength : 8,
        select : false
    },

    role : {
        type: String,
        enum :["customer", "seller", "admin"],
        default: "customer"
    },

    isVerified : {
        type: boolean,
        default : false
    },

    verificationToken: {type: String, select: false},
    refreshToken : { type: String, select : false},
    resetPasswordToken : { type: String, select : false},
    resetPasswordExpires : { type: Date, select : false},
    
}, {timestamps: true});

export default mongoose.model("User", userSchema)