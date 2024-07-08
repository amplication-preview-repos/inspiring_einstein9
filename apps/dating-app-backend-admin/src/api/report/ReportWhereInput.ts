import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReportWhereInput = {
  id?: StringFilter;
  reason?: StringNullableFilter;
  status?: "Option1";
  reportedBy?: StringNullableFilter;
  reportedUser?: StringNullableFilter;
};
