import { Router } from "express";
import { getAll } from "../controller/interests";

const router = Router();

router.get("/", getAll);

export default router;
