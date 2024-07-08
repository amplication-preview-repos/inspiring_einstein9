import * as graphql from "@nestjs/graphql";
import { UserLoginInput } from "../auth/UserLoginInput";
import { UserRegisterInput } from "../auth/UserRegisterInput";
import { AuthService } from "./auth.service";

export class AuthResolver {
  constructor(protected readonly service: AuthService) {}

  @graphql.Mutation(() => String)
  async LoginUser(
    @graphql.Args()
    args: UserLoginInput
  ): Promise<string> {
    return this.service.LoginUser(args);
  }

  @graphql.Mutation(() => String)
  async RegisterUser(
    @graphql.Args()
    args: UserRegisterInput
  ): Promise<string> {
    return this.service.RegisterUser(args);
  }
}
