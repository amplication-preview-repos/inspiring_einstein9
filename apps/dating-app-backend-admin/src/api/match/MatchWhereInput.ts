import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type MatchWhereInput = {
  id?: StringFilter;
  user1?: StringNullableFilter;
  user2?: StringNullableFilter;
  messages?: MessageListRelationFilter;
};
