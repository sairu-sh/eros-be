import BaseModel from "./baseModel";

export default class ProfileModel extends BaseModel {
  static async getAllProfiles(id: number) {
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
    console.log(minBirthYear);

    const profiles = await this.queryBuilder()
      .select("users.fullname as fullname", "user_details.dob as dob")
      .from("users")
      .leftJoin("user_details", "users.id", "=", "user_details.uid")
      .where((builder) => {
        builder
          .where("user_details.uid", "!=", id)
          .whereRaw(`EXTRACT(YEAR FROM(user_details.dob)) <= ${minBirthYear}`);
        //if the user's gender preference is either male or female, filter accordingly
        if (gender) {
          builder.where("user_details.gender", "=", gender);
        }
      });

    if (!profiles) {
      throw new Error("Could not get profiles");
    }
    return profiles;
  }
}
