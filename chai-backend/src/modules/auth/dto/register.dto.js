import Joi from "joi";
import BaseDto from "../../../common/dto/BaseDto.dto.js";

class RegisterDto extends BaseDto {
    static schema = Joi.object({
        name : Joi.string().min(2).max(50).trim().required(),
        email : Joi.string().email().lowercase().required(),
        password : Joi.string().min(8).required().message("Password must contain 8 chars minimum"),
        roles : Joi.string().valid("customer", "seller").default("customer")
    })
}

export default RegisterDto