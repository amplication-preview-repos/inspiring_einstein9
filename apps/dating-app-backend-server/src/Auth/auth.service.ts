import { Injectable } from "@nestjs/common";
import { UserLoginInput } from "../auth/UserLoginInput";
import { UserRegisterInput } from "../auth/UserRegisterInput";

@Injectable()
export class AuthService {
  constructor() {}
  async LoginUser(args: UserLoginInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async RegisterUser(args: UserRegisterInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
