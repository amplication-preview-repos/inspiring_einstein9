import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  reason?: SortOrder;
  status?: SortOrder;
  reportedBy?: SortOrder;
  reportedUser?: SortOrder;
};
