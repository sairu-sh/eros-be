import Router from "express";
import { createDetails } from "../controller/user-details.controller";

const router = Router();

router.post("/", createDetails);

export default router;
