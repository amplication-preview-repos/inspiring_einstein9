import { Match } from "../match/Match";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  receiver: string | null;
  match?: Match | null;
  sender: string | null;
};
