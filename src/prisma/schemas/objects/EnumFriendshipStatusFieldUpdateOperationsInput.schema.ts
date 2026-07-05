import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { FriendshipStatusSchema } from "../enums/FriendshipStatus.schema";

const makeSchema = () =>
  z
    .object({
      set: FriendshipStatusSchema.optional(),
    })
    .strict();
export const EnumFriendshipStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumFriendshipStatusFieldUpdateOperationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumFriendshipStatusFieldUpdateOperationsInput>;
export const EnumFriendshipStatusFieldUpdateOperationsInputObjectZodSchema =
  makeSchema();
