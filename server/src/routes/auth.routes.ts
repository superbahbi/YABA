/** src/routes/auth.ts */
import express from "express";
import { body } from 'express-validator';
import controller from "../controllers/auth.controllers";
const router = express.Router();

router.post("/login",
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    controller.login);
router.post("/register",
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('firstName').isLength({ min: 2 }),
    body('lastName').isLength({ min: 2 }),
    controller.register);
export = router;