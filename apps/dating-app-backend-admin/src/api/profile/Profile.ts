import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Profile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  interests: string | null;
  profilePicture: JsonValue;
  gender?: "Option1" | null;
  age: number | null;
  bio: string | null;
  user?: User | null;
};
