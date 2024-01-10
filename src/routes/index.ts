import { Router } from "express";
import authRoutes from "./auth";
import userRoutes from "./users";
import userDetailsRoutes from "./userDetails";
import interestRoutes from "./interests";
import { auth } from "./../middleware/auth";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", auth, userRoutes);

router.use("/interests", interestRoutes);

router.use("/create-details", userDetailsRoutes);

export default router;
