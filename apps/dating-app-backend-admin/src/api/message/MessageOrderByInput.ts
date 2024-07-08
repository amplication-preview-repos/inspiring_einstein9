import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  receiver?: SortOrder;
  matchId?: SortOrder;
  sender?: SortOrder;
};
