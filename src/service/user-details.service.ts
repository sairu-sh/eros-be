import UserDetailsModel from "../model/user-details.model";
import { IUpdateQuery } from "./../interfaces/update-query.interface";
import BadRequestError from "../errors/badRequestError";

export const createDetail = async (params: any) => {
  const { city, country } = params;
  delete params.city;
  delete params.country;
  const locationId: { id: number }[] | null =
    await UserDetailsModel.addLocation({
      city,
      country,
    });

  if (!locationId) {
    throw new BadRequestError("Location not created");
  }

  params.location = +locationId[0].id;
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

export const updateDetails = async (params: IUpdateQuery) => {
  try {
    const status = await UserDetailsModel.updateDetails(params);
    if (!status) {
      throw new BadRequestError("Details not updated");
    }
    return status;
  } catch (err) {
    console.error("Error during details update:", err);
    throw new BadRequestError("Details not updated");
  }
};
