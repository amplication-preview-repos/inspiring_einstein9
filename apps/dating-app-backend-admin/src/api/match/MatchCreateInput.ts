import { MessageCreateNestedManyWithoutMatchesInput } from "./MessageCreateNestedManyWithoutMatchesInput";

export type MatchCreateInput = {
  user1?: string | null;
  user2?: string | null;
  messages?: MessageCreateNestedManyWithoutMatchesInput;
};
