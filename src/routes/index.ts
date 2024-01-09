import { Router } from "express";
import authRoutes from "./auth";
import userRoutes from "./users";
import interestRoutes from "./interests";
import { auth } from "./../middleware/auth";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", auth, userRoutes);

router.use("/interests", interestRoutes);

export default router;
