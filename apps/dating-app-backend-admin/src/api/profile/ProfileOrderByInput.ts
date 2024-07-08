import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  interests?: SortOrder;
  profilePicture?: SortOrder;
  gender?: SortOrder;
  age?: SortOrder;
  bio?: SortOrder;
  userId?: SortOrder;
};
