import { MessageUpdateManyWithoutMatchesInput } from "./MessageUpdateManyWithoutMatchesInput";

export type MatchUpdateInput = {
  user1?: string | null;
  user2?: string | null;
  messages?: MessageUpdateManyWithoutMatchesInput;
};
