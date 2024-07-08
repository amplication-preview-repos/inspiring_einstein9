import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  receiver?: string | null;
  match?: MatchWhereUniqueInput | null;
  sender?: string | null;
};
