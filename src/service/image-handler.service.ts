import { v2 as cloudinary } from "cloudinary";
import { IImageParams } from "../interfaces/image-uploader.interface";
import ImageModel from "../model/image-handler.model";

cloudinary.config({
  cloud_name: "dzdls2vap",
  api_key: "724684589398681",
  api_secret: "jbAazSIsRgUSssG8RNX9euvVKVU",
});

export const imageUploader = async (params: IImageParams) => {
  let response;
  const filesArray = Array.isArray(params.files)
    ? params.files
    : [params.files];

  try {
    if (filesArray.length > 0) {
      for (const file of filesArray) {
        if (file && file.tempFilePath) {
          const result = await cloudinary.uploader.upload(file.tempFilePath);
          const path = result.secure_url;
          params.url = path;
          const query = await ImageModel.uploadImage(params);
          if (query) response = true;
        }
      }
    }
    return response;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};

export const getImageUrl = async (uid: number) => {
  try {
    const url = await ImageModel.getImageUrl(uid);
    return url;
  } catch (error) {
    console.error("Error getting image URL:", error);
    return null;
  }
};

export const delImageUrl = async (uid: number, url: string) => {
  try {
    const query = await ImageModel.delImage(uid, url);
    if (query) return true;
  } catch {}
};
