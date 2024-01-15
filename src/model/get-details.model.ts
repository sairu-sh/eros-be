import BaseModel from "./base-model.model";

export default class DetailsModel extends BaseModel {
  static async getDetails(id: number, uid: number) {
    const userPosition = await this.queryBuilder()
      .select("latitude", "longitude")
      .table("user_details")
      .leftJoin("locations", "user_details.location", "=", " locations.id")
      .where({ uid })
      .first();

    const userDetails = await this.queryBuilder()
      .select(
        "users.id",
        "users.fullname",
        "user_details.dob",
        "user_details.bio",
        "genders.gender",
        "user_details.college",
        "locations.city",
        "locations.country",
        this.queryBuilder().raw(`
          (6371 * 
            acos(
              cos(radians(${userPosition.latitude})) * 
              cos(radians(locations.latitude)) * 
              cos(radians(locations.longitude) - 
              radians(${userPosition.longitude})) + 
              sin(radians(${userPosition.latitude})) * 
              sin(radians(locations.latitude))
            )
          ) as distance`)
      )
      .select(
        this.queryBuilder().raw(
          "JSONB_AGG(DISTINCT interests.interest) as interests"
        ),
        this.queryBuilder().raw("JSONB_AGG(DISTINCT images.url) as imageUrls")
      )
      .from("user_details")
      .leftJoin("users", "user_details.uid", "=", "users.id")
      .leftJoin("genders", "user_details.gender", "=", "genders.id")
      .leftJoin("locations", "user_details.location", "=", "locations.id")
      .leftJoin("user_interests", "user_details.uid", "=", "user_interests.uid")
      .leftJoin("interests", "user_interests.interest", "=", "interests.id")
      .leftJoin("images", "images.uid", "=", "users.id") // Join with images table
      .where("user_details.uid", "=", id)
      .groupBy(
        "users.id",
        "users.fullname",
        "user_details.dob",
        "user_details.bio",
        "genders.gender",
        "user_details.college",
        "locations.city",
        "locations.country",
        "locations.latitude",
        "locations.longitude"
      )
      .first();

    if (!userDetails) {
      throw new Error("User not found");
    }
    return userDetails;
  }
}
