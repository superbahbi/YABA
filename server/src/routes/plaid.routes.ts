/** src/routes/auth.ts */
import express from "express";
import controller from "../controllers/plaid.controllers";
const router = express.Router();

router.get("/create_link_token",
    controller.createLinkToken);
router.post("/exchange_public_token",
    controller.exchangePublicToken);
router.post("/balance",
    controller.balance);
export = router;