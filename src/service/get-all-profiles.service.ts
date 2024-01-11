import ProfileModel from "../model/get-all-profiles.model";
import NotFoundError from "../errors/notFoundError";

export const getAllProfiles = async (id: number) => {
  try {
    const result = await ProfileModel.getAllProfiles(id);
    if (result.length <= 0) {
      throw new NotFoundError("No profiles found");
    }
    return result;
  } catch (e) {}
};
