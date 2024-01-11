import Router from "express";
import { updateLocation } from "../controller/updateLocation";

const router = Router();

router.post("/", updateLocation);

export default router;
