import UserDetailsModel from "../model/userDetails";
import BadRequestError from "../errors/badRequestError";

export const createDetail = async (params: any) => {
  const interests = params.interests || [];
  delete params.interests;
  const data = await UserDetailsModel.createDetails(params);

  if (!data) {
    throw new BadRequestError("Details not created");
  }

  const status = await UserDetailsModel.addInterests(interests, params.uid);
  if (!status) {
    throw new BadRequestError("Interests not created");
  }

  return status;
};
