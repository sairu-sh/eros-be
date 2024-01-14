import { Request, Response } from "express";
import fileUpload from "express-fileupload";
import * as uploadService from "../service/image-handler.service";

export const imageUploader = async (req: any, res: Response) => {
  try {
    const files = req.files?.photo as fileUpload.UploadedFile[];

    const uid = req.user.id as number;
    const params = {
      uid,
      files,
    };

    if (!files) {
      throw new Error("No file uploaded");
    }

    const result = await uploadService.imageUploader(params);

    res.status(200).json(result);
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getImage = async (req: any, res: Response) => {
  try {
    const uid: number = req.user.id;
    const imageUrls = await uploadService.getImageUrl(uid);
    res.status(200).json(imageUrls);
  } catch (error) {
    console.error("Error getting image:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
