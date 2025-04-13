import { Router } from "express";
import {
	registrationValidator,
	loginValidator,
} from "../validators/auth.validator.js";
import {
	signUp,
	signIn,
	checkSession,
	logout,
} from "../controllers/auth.controller.js";

export const authRouter = Router();

authRouter.post("/register", registrationValidator, signUp);
authRouter.post("/login", loginValidator, signIn);
authRouter.get("/logout", logout);
authRouter.get("/session", checkSession);
