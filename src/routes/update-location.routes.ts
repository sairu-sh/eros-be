import Router from "express";
import { updateLocation } from "../controller/update-location.controller";

const router = Router();

router.post("/", updateLocation);

export default router;
