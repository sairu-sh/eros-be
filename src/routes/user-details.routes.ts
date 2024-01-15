import Router from "express";
import { createDetails, updateDetails } from "../controller/user-details.controller";

const router = Router();

router.post("/", createDetails);

router.patch("/", updateDetails)

export default router;
