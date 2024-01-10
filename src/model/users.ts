import BaseModel from "./baseModel";

export default class ProjectModel extends BaseModel {
  static async getUsers(params: any) {
    const query = await this.queryBuilder()
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
    return query?.[0];
  }
  static async createUser(params: any) {
    const query = this.queryBuilder()
      .insert(params)
      .table("users")
      .returning("id");
    const [userId] = await query;
    return userId;
  }

  static async getByEmail(email: string) {
    const user = await this.queryBuilder()
      .select({
        id: "id",
        fullname: "fullname",
        password: "password",
        email: "email",
      })
      .table("users")
      .where({ email })
      .first();

    return user || null;
  }

  static async getById(id: number) {
    return this.queryBuilder()
      .select({
        id: "id",
        fullname: "fullname",
        email: "email",
      })
      .from("users")
      .where({ id })
      .first();
  }

  static async delete(id: number) {
    return this.queryBuilder().table("users").where({ id }).del();
  }
}
