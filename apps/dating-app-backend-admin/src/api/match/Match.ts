import { Message } from "../message/Message";

export type Match = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user1: string | null;
  user2: string | null;
  messages?: Array<Message>;
};
