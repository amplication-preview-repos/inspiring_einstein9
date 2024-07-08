import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type MessageUpdateManyWithoutMatchesInput = {
  connect?: Array<MessageWhereUniqueInput>;
  disconnect?: Array<MessageWhereUniqueInput>;
  set?: Array<MessageWhereUniqueInput>;
};
