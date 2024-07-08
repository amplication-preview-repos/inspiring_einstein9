import { User } from "../user/User";

export type Subscription = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  endDate: Date | null;
  startDate: Date | null;
  typeField?: "Option1" | null;
  user?: User | null;
};
