import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { FriendshipStatusSchema } from "../enums/FriendshipStatus.schema";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumFriendshipStatusFilterObjectSchema as NestedEnumFriendshipStatusFilterObjectSchema } from "./NestedEnumFriendshipStatusFilter.schema";

const nestedenumfriendshipstatuswithaggregatesfilterSchema = z
  .object({
    equals: FriendshipStatusSchema.optional(),
    in: FriendshipStatusSchema.array().optional(),
    notIn: FriendshipStatusSchema.array().optional(),
    not: z
      .union([
        FriendshipStatusSchema,
        z.lazy(
          () => NestedEnumFriendshipStatusWithAggregatesFilterObjectSchema,
        ),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumFriendshipStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumFriendshipStatusFilterObjectSchema).optional(),
  })
  .strict();
export const NestedEnumFriendshipStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumFriendshipStatusWithAggregatesFilter> =
  nestedenumfriendshipstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumFriendshipStatusWithAggregatesFilter>;
export const NestedEnumFriendshipStatusWithAggregatesFilterObjectZodSchema =
  nestedenumfriendshipstatuswithaggregatesfilterSchema;
