import BaseModel from "./base-model.model";
import { IImageParams } from "../interfaces/image-uploader.interface";

export default class ImageModel extends BaseModel {
  static async uploadImage(params: IImageParams) {
    const query = await this.queryBuilder()
      .insert({ uid: params.uid, url: params.url })
      .table("images");
    return query;
  }

  static async getImageUrl(uid: number) {
    const query = await this.queryBuilder()
      .select({ url: "url" })
      .where({ uid })
      .table("images");
    return query;
  }
}
