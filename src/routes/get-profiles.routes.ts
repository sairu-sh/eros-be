import { Router } from "express";
import { getProfiles } from "../controller/get-all-profiles.controller";

const router = Router();

router.get("/", getProfiles);

export default router;
