import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  id?: StringFilter;
  interests?: StringNullableFilter;
  profilePicture?: JsonFilter;
  gender?: "Option1";
  age?: IntNullableFilter;
  bio?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
