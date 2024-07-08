import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionUpdateInput = {
  endDate?: Date | null;
  startDate?: Date | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
