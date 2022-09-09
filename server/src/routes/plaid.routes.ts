/** src/routes/auth.ts */
import express from "express";
import controller from "../controllers/plaid.controllers";
const router = express.Router();

router.post("/create_link_token",
    controller.createLinkToken);
export = router;