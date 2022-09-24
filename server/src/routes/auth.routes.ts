/** src/routes/auth.ts */
import express from "express";
import { body } from 'express-validator';
import { login, register, forgotPassword, resetPassword, logout } from "../controllers/auth.controllers";
const router = express.Router();

router.post("/login",
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    login);
router.post("/register",
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('firstName').isLength({ min: 2 }),
    body('lastName').isLength({ min: 2 }),
    register);
router.post("/forgot-password",
    body('email').isEmail(),
    forgotPassword);
router.post("/reset-password",
    body('token').isLength({ min: 1 }),
    body('password').isLength({ min: 6 }),
    resetPassword);
router.get("/logout", logout);
export = router;