import { Router } from "express";
import {
  imageUploader,
  getImage,
  deleteImage,
} from "../controller/image-handler.controller";

const router = Router();

router.post("/", imageUploader);

router.get("/", getImage);

router.delete("/", deleteImage);

export default router;
