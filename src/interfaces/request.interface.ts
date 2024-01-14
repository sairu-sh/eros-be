import { IPaginationQuery } from "./pagination.interface";
export interface IUser {
  id: number;
  fullname: string;
  password: string;
  email: string;
  iat: number;
  exp: number;
}

export interface IReq {
  user: IUser;
  query: IPaginationQuery;
}
