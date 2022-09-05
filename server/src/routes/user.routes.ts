/** src/routes/users.ts */
import express from "express";
import controller from "../controllers/user.controllers";
const router = express.Router();

router.get("/users", controller.getAllUsers);
router.post("/user", controller.addUser);
router.get("/user/:id", controller.getUser);
router.put("/user", controller.updateUser);
router.delete("/user/:id", controller.deleteUser);
export = router;
