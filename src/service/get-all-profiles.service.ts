import ProfileModel from "../model/get-all-profiles.model";
import NotFoundError from "../errors/notFoundError";
import { IPaginationQuery } from "../interfaces/pagination.interface";
import { getPaginationOptions } from "../util/pagination.util";

export const getAllProfiles = async (id: number, query: IPaginationQuery) => {
  try {
    const { page, size } = query;

    const pageDetails = getPaginationOptions({ page, size });

    const profiles = await ProfileModel.getAllProfiles(id, pageDetails);

    if (profiles.length <= 0) {
      throw new NotFoundError("No profiles found");
    }
    return profiles;
  } catch (e) {}
};
