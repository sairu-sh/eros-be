import fileUpload from "express-fileupload";

export interface IImageParams {
  uid: number;
  files?: fileUpload.UploadedFile[];
  url?: string;
}
