import Router from "express";
import { createDetails } from "../controller/userDetails";

const router = Router();

router.post("/", createDetails);

export default router;
