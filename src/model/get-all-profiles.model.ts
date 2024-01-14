import BaseModel from "./baseModel";
import { IPaginationParam } from "../interfaces/pagination.interface";

export default class ProfileModel extends BaseModel {
  static async getAllProfiles(id: number, params: IPaginationParam) {
    //get the user's gender preference
    const details = await this.queryBuilder()
      .select("prefered_gender", "prefered_age", "latitude", "longitude")
      .table("user_details")
      .leftJoin("locations", "user_details.location", "=", " locations.id")
      .where({ uid: id })
      .first();

    // check if the user's preference is a singe gender or both
    let gender: number | null;
    if (details.preferedGender === 3) {
      gender = null;
    } else gender = details.preferedGender;

    //calculate the minimum dob for the user to be older than the prefered age
    const currentYear: number = new Date().getFullYear();
    const minBirthYear: number = currentYear - details.preferedAge;
    const profiles = this.queryBuilder()
      .select(
        this.queryBuilder().raw("CAST(users.id AS INTEGER) as uid"),
        "users.fullname as fullname",
        "user_details.dob as dob",
        "locations.latitude as lat",
        "locations.longitude as long"
      )
      .select(
        this.queryBuilder().raw(`
        (6371 * 
          acos(
            cos(radians(${details.latitude})) * 
            cos(radians(locations.latitude)) * 
            cos(radians(locations.longitude) - 
            radians(${details.longitude})) + 
            sin(radians(${details.latitude})) * 
            sin(radians(locations.latitude))
          )
        ) as distance`)
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
      })
      .orderBy("distance", "asc");

    profiles.offset(params.offset).limit(params.limit);

    if (!profiles) {
      throw new Error("Could not get profiles");
    }
    return profiles;
  }

  static countAll(params: IPaginationParam) {
    const query = this.queryBuilder()
      .table("projects")
      .count({ count: "id" })
      .first();

    return query;
  }
}
