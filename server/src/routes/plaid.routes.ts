/** src/routes/auth.ts */
import express from "express";
import { createLinkToken, exchangePublicToken, balance } from "../controllers/plaid.controllers";
const router = express.Router();

router.get("/create_link_token",
    createLinkToken);
router.post("/exchange_public_token",
    exchangePublicToken);
router.post("/balance",
    balance);
export = router;