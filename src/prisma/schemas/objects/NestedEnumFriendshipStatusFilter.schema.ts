import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { FriendshipStatusSchema } from "../enums/FriendshipStatus.schema";

const nestedenumfriendshipstatusfilterSchema = z
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
export const NestedEnumFriendshipStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumFriendshipStatusFilter> =
  nestedenumfriendshipstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumFriendshipStatusFilter>;
export const NestedEnumFriendshipStatusFilterObjectZodSchema =
  nestedenumfriendshipstatusfilterSchema;
