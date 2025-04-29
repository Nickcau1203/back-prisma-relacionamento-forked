import express from "express";
import AuthController from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/register", AuthController.registerUser); // Rota para registrar um novo usuário

export default authRouter;
