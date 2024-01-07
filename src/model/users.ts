import BaseModel from "./baseModel";

export default class ProjectModel extends BaseModel {
  static async getAllUsers(params: any) {
    const query = this.queryBuilder()
      .select("*")
      .table("users")
      .where((builder) => {
        if (params.username) {
          builder.where({ username: params.username });
        }
        if (params.email) {
          builder.orWhere({ email: params.email });
        }
      });
    return (await query).length > 0 ? true : false;
  }
  static async createUser(params: any) {
    const query = this.queryBuilder().insert(params).table("users");
    return query;
  }
}
