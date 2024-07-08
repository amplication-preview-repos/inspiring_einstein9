/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Message as PrismaMessage,
  Match as PrismaMatch,
} from "@prisma/client";
import { MessageOutput } from "../MessageOutput";

export class MessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MessageCountArgs, "select">): Promise<number> {
    return this.prisma.message.count(args);
  }

  async messages(args: Prisma.MessageFindManyArgs): Promise<PrismaMessage[]> {
    return this.prisma.message.findMany(args);
  }
  async message(
    args: Prisma.MessageFindUniqueArgs
  ): Promise<PrismaMessage | null> {
    return this.prisma.message.findUnique(args);
  }
  async createMessage(args: Prisma.MessageCreateArgs): Promise<PrismaMessage> {
    return this.prisma.message.create(args);
  }
  async updateMessage(args: Prisma.MessageUpdateArgs): Promise<PrismaMessage> {
    return this.prisma.message.update(args);
  }
  async deleteMessage(args: Prisma.MessageDeleteArgs): Promise<PrismaMessage> {
    return this.prisma.message.delete(args);
  }

  async getMatch(parentId: string): Promise<PrismaMatch | null> {
    return this.prisma.message
      .findUnique({
        where: { id: parentId },
      })
      .match();
  }
  async GetMessages(args: string): Promise<MessageOutput[]> {
    throw new Error("Not implemented");
  }
}
