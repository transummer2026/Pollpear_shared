import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { FriendshipStatusSchema } from "../enums/FriendshipStatus.schema";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      status: FriendshipStatusSchema,
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      requesterId: z.number().int(),
      addresseeId: z.number().int(),
    })
    .strict();
export const FriendshipCreateManyInputObjectSchema: z.ZodType<Prisma.FriendshipCreateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateManyInput>;
export const FriendshipCreateManyInputObjectZodSchema = makeSchema();
