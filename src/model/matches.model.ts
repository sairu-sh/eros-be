import BaseModel from "./base-model.model";
import { IMatchParams } from "../interfaces/match.interface";

export default class MatchModel extends BaseModel {
  static async getAllMatches(id: number) {
    return this.queryBuilder()
      .select("primary_user", "secondary_user")
      .from("matches")
      .where("primary_user", "=", id)
      .as("match");
  }

  static async createMatch(params: IMatchParams) {
    const [firstRecordId, secondRecordId] = await Promise.all([
      this.queryBuilder()
        .insert({
          primary_user: params.primaryUser,
          secondary_user: params.secondaryUser,
        })
        .table("matches")
        .returning("id"),

      this.queryBuilder()
        .insert({
          primary_user: params.secondaryUser,
          secondary_user: params.primaryUser,
        })
        .table("matches")
        .returning("id"),
    ]);

    return { firstRecordId, secondRecordId };
  }

  static async deleteMatch(params: IMatchParams) {
    return this.queryBuilder().table("matches").where(params).del();
  }
}
