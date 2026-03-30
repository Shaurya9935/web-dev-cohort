import { Router } from "express";
import * as controller from "./auth.controller.js"
import validate from "../../common/middleware/validate.middleware.js"
import RegisterDto from "./dto/register.dto.js"
import LoginDto from "./dto/login.dto.js"
import authMiddleware from "./auth.middleware.js"

const router = Router()

// console.log("validate: ", typeof validate);
// console.log("validate(LoginDto): ", typeof validate(LoginDto));
// console.log("authenticate :", typeof authenticate)

router.post("/register",validate(RegisterDto), controller.register);
router.post("/login", validate(LoginDto), controller.login);
router.post("/logout", authMiddleware.authenticate, controller.login);
router.get("/me", authMiddleware.authenticate, controller.getMe);

export default router