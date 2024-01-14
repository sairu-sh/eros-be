import { Router } from "express";
import { getDetailsController } from "../controller/get-details.controller";

const router = Router();

router.get("/:id", getDetailsController);

export default router;
