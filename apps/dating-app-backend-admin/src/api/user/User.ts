import { JsonValue } from "type-fest";
import { Profile } from "../profile/Profile";
import { Subscription } from "../subscription/Subscription";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  profiles?: Array<Profile>;
  subscriptions?: Array<Subscription>;
};
