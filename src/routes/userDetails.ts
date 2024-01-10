import Router from "express";
import { createDetails } from "../controller/userDetails";

const router = Router();

router.post("/:id", createDetails);

export default router;
