import BaseModel from "./base-model.model";
import { IMatchRequest } from "../interfaces/match-request.interface";

export default class RequestsModel extends BaseModel {
  static async getAllRequests() {
    return this.queryBuilder().table("requests").select();
  }

  static async deleteRequest(params: IMatchRequest) {
    return this.queryBuilder().table("requests").where(params).del();
  }

  static async createRequest(params: IMatchRequest) {
    return this.queryBuilder().insert(params).table("requests").returning("id");
  }
}
