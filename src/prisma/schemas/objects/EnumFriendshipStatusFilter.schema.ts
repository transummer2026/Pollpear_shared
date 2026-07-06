import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { FriendshipStatusSchema } from "../enums/FriendshipStatus.schema";
import { NestedEnumFriendshipStatusFilterObjectSchema as NestedEnumFriendshipStatusFilterObjectSchema } from "./NestedEnumFriendshipStatusFilter.schema";

const makeSchema = () =>
  z
    .object({
      equals: FriendshipStatusSchema.optional(),
      in: FriendshipStatusSchema.array().optional(),
      notIn: FriendshipStatusSchema.array().optional(),
      not: z
        .union([
          FriendshipStatusSchema,
          z.lazy(() => NestedEnumFriendshipStatusFilterObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const EnumFriendshipStatusFilterObjectSchema: z.ZodType<Prisma.EnumFriendshipStatusFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumFriendshipStatusFilter>;
export const EnumFriendshipStatusFilterObjectZodSchema = makeSchema();
