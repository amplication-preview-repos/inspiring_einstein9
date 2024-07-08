/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Profile } from "./Profile";
import { ProfileCountArgs } from "./ProfileCountArgs";
import { ProfileFindManyArgs } from "./ProfileFindManyArgs";
import { ProfileFindUniqueArgs } from "./ProfileFindUniqueArgs";
import { CreateProfileArgs } from "./CreateProfileArgs";
import { UpdateProfileArgs } from "./UpdateProfileArgs";
import { DeleteProfileArgs } from "./DeleteProfileArgs";
import { User } from "../../user/base/User";
import { ProfileOutput } from "../ProfileOutput";
import { CreateProfileInput } from "../CreateProfileInput";
import { UpdateProfileInput } from "../UpdateProfileInput";
import { ProfileService } from "../profile.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Profile)
export class ProfileResolverBase {
  constructor(
    protected readonly service: ProfileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "read",
    possession: "any",
  })
  async _profilesMeta(
    @graphql.Args() args: ProfileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Profile])
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "read",
    possession: "any",
  })
  async profiles(
    @graphql.Args() args: ProfileFindManyArgs
  ): Promise<Profile[]> {
    return this.service.profiles(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Profile, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "read",
    possession: "own",
  })
  async profile(
    @graphql.Args() args: ProfileFindUniqueArgs
  ): Promise<Profile | null> {
    const result = await this.service.profile(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Profile)
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "create",
    possession: "any",
  })
  async createProfile(
    @graphql.Args() args: CreateProfileArgs
  ): Promise<Profile> {
    return await this.service.createProfile({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Profile)
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "update",
    possession: "any",
  })
  async updateProfile(
    @graphql.Args() args: UpdateProfileArgs
  ): Promise<Profile | null> {
    try {
      return await this.service.updateProfile({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Profile)
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "delete",
    possession: "any",
  })
  async deleteProfile(
    @graphql.Args() args: DeleteProfileArgs
  ): Promise<Profile | null> {
    try {
      return await this.service.deleteProfile(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Profile): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => [ProfileOutput])
  async BrowseProfiles(
    @graphql.Args()
    args: string
  ): Promise<ProfileOutput[]> {
    return this.service.BrowseProfiles(args);
  }

  @graphql.Mutation(() => ProfileOutput)
  async CreateNewProfile(
    @graphql.Args()
    args: CreateProfileInput
  ): Promise<ProfileOutput> {
    return this.service.CreateNewProfile(args);
  }

  @graphql.Mutation(() => ProfileOutput)
  async UpdateExistingProfile(
    @graphql.Args()
    args: UpdateProfileInput
  ): Promise<ProfileOutput> {
    return this.service.UpdateExistingProfile(args);
  }
}
