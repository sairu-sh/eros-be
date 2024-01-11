import { Router } from "express";
import authRoutes from "./auth";
import userRoutes from "./users";
import userDetailsRoutes from "./userDetails";
import interestRoutes from "./interests";
import updateLocationRoutes from "./updateLocation";
import { auth } from "./../middleware/auth";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", auth, userRoutes);

router.use("/interests", interestRoutes);

router.use("/create-details", auth, userDetailsRoutes);

router.use("/update-location", auth, updateLocationRoutes);

export default router;
