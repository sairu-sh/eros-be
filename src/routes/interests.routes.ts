import { Router } from "express";
import { getAll } from "../controller/interests.controller";

const router = Router();

router.get("/", getAll);

export default router;
