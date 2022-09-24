/** src/routes/users.ts */
import express from "express";
import { getAllUsers, getUser, addUser, updateUser, deleteUser } from "../controllers/user.controllers";
const router = express.Router();

router.get("/users", getAllUsers);
router.post("/user", addUser);
router.get("/user/:id", getUser);
router.put("/user", updateUser);
router.delete("/user/:id", deleteUser);
export = router;
