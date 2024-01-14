import { Router } from "express";
import {
  imageUploader,
  getImage,
} from "../controller/image-handler.controller";

const router = Router();

router.post("/", imageUploader);

router.get("/", getImage);

export default router;
