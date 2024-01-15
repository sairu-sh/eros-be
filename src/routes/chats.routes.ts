import { Router } from "express";
import { getAllChats, insertChat } from "../controller/chats.controller";

const router = Router();

router.get("/:id", getAllChats);

router.post("/", insertChat);

export default router;
