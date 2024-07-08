import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  receiver?: StringNullableFilter;
  match?: MatchWhereUniqueInput;
  sender?: StringNullableFilter;
};
