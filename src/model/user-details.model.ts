import BaseModel from "./base-model.model";

export default class UserDetailsModel extends BaseModel {
  static async createDetails(params: any) {
    try {
      const result = await this.queryBuilder()
        .insert(params)
        .table("user_details")
        .returning("id");

      if (!result || result.length === 0 || !result[0].id) {
        throw new Error("Insertion failed. Missing ID in the response.");
      }

      return result[0].id;
    } catch (error) {
      console.error("Error during user details insertion:", error);
      return null;
    }
  }

  static async addInterests(params: number[], uid: number) {
    try {
      const promises = params.map(async (id) => {
        const result = await this.queryBuilder()
          .insert({
            uid,
            interest: id,
          })
          .table("user_interests");
      });

      await Promise.all(promises);
      return true;
    } catch (error) {
      console.error("Error during interests insertion:", error);
      throw new Error("Failed to add interests");
    }
  }

  static async addLocation(params: { city: string; country: string }) {
    try {
      const result: { id: any }[] | null = await this.queryBuilder()
        .insert(params)
        .table("locations")
        .returning("id");
      if (!result || result.length === 0 || !result[0].id) {
        throw new Error("Insertion failed. Missing ID in the response.");
      }
      return result;
    } catch (error) {
      return null;
    }
  }
}
