import BaseModel from "./base-model.model";

export default class InterestModel extends BaseModel {
  static async getAllInterests() {
    const query = await this.queryBuilder()
      .select({
        id: "id",
        interest: "interest",
      })
      .table("interests");
    return query;
  }
}
