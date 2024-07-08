import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  interests?: string | null;
  profilePicture?: InputJsonValue;
  gender?: "Option1" | null;
  age?: number | null;
  bio?: string | null;
  user?: UserWhereUniqueInput | null;
};
