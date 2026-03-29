import * as authService from "./auth.service"
import ApiResponse from "../../common/utils/api-response"

const register = async () =>{
    const user = await authService.register(req.body)
    ApiResponse.created(res, "Registation success", user)
}

export {register}