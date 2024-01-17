import { Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./users.routes";
import userDetailsRoutes from "./user-details.routes";
import interestRoutes from "./interests.routes";
import updateLocationRoutes from "./update-location.routes";
import getProfileRoutes from "./get-profiles.routes";
import getDetailsRoutes from "./get-details.routes";
import imageUploadRoute from "./image-handler.routes";
import matchRequest from "./match-request.routes";
import matchesRoutes from "./matches.routes";
import chatRoutes from "./chats.routes";
import { auth } from "../middleware/auth.middleware";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", auth, userRoutes);

router.use("/interests", interestRoutes);

router.use("/create-details", auth, userDetailsRoutes);

router.use("/update-location", auth, updateLocationRoutes);

router.use("/get-profiles", auth, getProfileRoutes);

router.use("/get-details", auth, getDetailsRoutes);

router.use("/upload-image", auth, imageUploadRoute);

router.use("/request", auth, matchRequest);

router.use("/match", auth, matchesRoutes);

router.use("/chats", auth, chatRoutes);

export default router;
