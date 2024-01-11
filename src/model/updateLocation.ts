import BaseModel from "./baseModel";

export default class UpdateLocationModel extends BaseModel {
  static async updateLocation(
    id: number,
    params: { latitude: number; longitude: number }
  ) {
    try {
      const locationId: { location: number } = await this.queryBuilder()
        .select({ location: "location" })
        .where({ uid: id })
        .table("user_details")
        .first();

      const result = await this.queryBuilder()
        .update(params)
        .where({ id: locationId.location })
        .table("locations");
      if (!result) {
        throw new Error("Insertion failed. Missing ID in the response.");
      }
      return result;
    } catch (error) {
      console.error("Error during user location update:", error);
      return null;
    }
  }
}
