import { Router } from "express";
import { getAllChats } from "../controller/chats.controller";

const router = Router();

router.get("/", getAllChats);

export default router;
