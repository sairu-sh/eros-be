import BaseModel from "./baseModel";

export default class ProjectModel extends BaseModel {
  static async createDetails(params: any) {
    const query = this.queryBuilder().insert(params).table("user-details");
    return query;
  }
}
