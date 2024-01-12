import BaseModel from "./baseModel";
import {
  PaginationQuery,
  PaginationParam,
} from "../interfaces/pagination.interface";

export default class ProfileModel extends BaseModel {
  static async getAllProfiles(id: number, params: PaginationParam) {
    //get the user's gender preference
    const preference = await this.queryBuilder()
      .select("prefered_gender", "prefered_age")
      .table("user_details")
      .where({ uid: id })
      .first();

    // check if the user's preference is a singe gender or both
    let gender: number | null;
    if (preference.preferedGender === 3) {
      gender = null;
    } else gender = preference.preferedGender;

    //calculate the minimum dob for the user to be older than the prefered age
    const currentYear: number = new Date().getFullYear();
    const minBirthYear: number = currentYear - preference.preferedAge;

    const profiles = this.queryBuilder()
      .select(
        this.queryBuilder().raw("CAST(users.id AS INTEGER) as uid"),
        "users.fullname as fullname",
        "user_details.dob as dob",
        "locations.latitude as lat",
        "locations.longitude as long"
      )
      .from("users")
      .leftJoin("user_details", "users.id", "=", "user_details.uid")
      .leftJoin("locations", "user_details.location", "=", "locations.id")
      .where((builder) => {
        builder
          .where("user_details.uid", "!=", id)
          .whereRaw(`EXTRACT(YEAR FROM(user_details.dob)) <= ${minBirthYear}`);
        //if the user's gender preference is either male or female, filter accordingly
        if (gender) {
          builder.where("user_details.gender", "=", gender);
        }
      });

    profiles.offset(params.offset).limit(params.limit);

    if (!profiles) {
      throw new Error("Could not get profiles");
    }
    return profiles;
  }

  static countAll(params: PaginationParam) {
    const query = this.queryBuilder()
      .table("projects")
      .count({ count: "id" })
      .first();

    return query;
  }
}