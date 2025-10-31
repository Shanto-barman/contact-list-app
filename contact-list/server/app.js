import express from "express";
import userRoutes from "./src/module/user/user.route.js";

const router = express.Router();

router.use("/user", userRoutes);

export default router;
