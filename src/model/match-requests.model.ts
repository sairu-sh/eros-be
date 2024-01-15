import BaseModel from "./base-model.model";
import { IMatchRequest } from "../interfaces/match-request.interface";

export default class RequestsModel extends BaseModel {
  static async getAllRequests(id: number) {
    return this.queryBuilder()
      .select(
        this.queryBuilder().raw("CAST(users.id AS INTEGER) as id"),
        "users.fullname",
        this.queryBuilder()
          .select("url")
          .from("images")
          .whereRaw("images.uid = users.id")
          .limit(1)
          .as("image_url")
      )
      .table("requests")
      .leftJoin("users", "requests.sender_id", "=", "users.id")
      .leftJoin("images", "users.id", "=", "images.uid")
      .where("receiver_id", "=", id)
      .groupBy("users.id");
  }

  static async deleteRequest(params: IMatchRequest) {
    return this.queryBuilder().table("requests").where(params).del();
  }

  static async createRequest(params: IMatchRequest) {
    return this.queryBuilder().insert(params).table("requests").returning("id");
  }

  static async getRequest(params: IMatchRequest) {
    return this.queryBuilder()
      .select("id")
      .table("requests")
      .where(params)
      .first();
  }
}
