import { InputJsonValue } from "../../types";
import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";
import { SubscriptionCreateNestedManyWithoutUsersInput } from "./SubscriptionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  subscriptions?: SubscriptionCreateNestedManyWithoutUsersInput;
};
