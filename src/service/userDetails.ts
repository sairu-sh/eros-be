import UserDetailsModel from "../model/userDetails";
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
