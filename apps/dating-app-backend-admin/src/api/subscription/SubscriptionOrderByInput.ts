import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  endDate?: SortOrder;
  startDate?: SortOrder;
  typeField?: SortOrder;
  userId?: SortOrder;
};
