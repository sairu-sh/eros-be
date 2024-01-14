import { Router } from "express";
import authRoutes from "./auth";
import userRoutes from "./users";
import userDetailsRoutes from "./userDetails";
import interestRoutes from "./interests";
import updateLocationRoutes from "./updateLocation";
import getProfileRoutes from "./get-profiles.routes";
import getDetailsRoutes from "./get-details.routes";
import { auth } from "./../middleware/auth";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", auth, userRoutes);

router.use("/interests", interestRoutes);

router.use("/create-details", auth, userDetailsRoutes);

router.use("/update-location", auth, updateLocationRoutes);

router.use("/get-profiles", auth, getProfileRoutes);

router.use("/get-details", auth, getDetailsRoutes);

export default router;
