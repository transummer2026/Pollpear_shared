import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema';
import { NestedEnumFriendshipStatusWithAggregatesFilterObjectSchema as NestedEnumFriendshipStatusWithAggregatesFilterObjectSchema } from './NestedEnumFriendshipStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumFriendshipStatusFilterObjectSchema as NestedEnumFriendshipStatusFilterObjectSchema } from './NestedEnumFriendshipStatusFilter.schema'

const makeSchema = () => z.object({
  equals: FriendshipStatusSchema.optional(),
  in: FriendshipStatusSchema.array().optional(),
  notIn: FriendshipStatusSchema.array().optional(),
  not: z.union([FriendshipStatusSchema, z.lazy(() => NestedEnumFriendshipStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumFriendshipStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumFriendshipStatusFilterObjectSchema).optional()
}).strict();
export const EnumFriendshipStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumFriendshipStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumFriendshipStatusWithAggregatesFilter>;
export const EnumFriendshipStatusWithAggregatesFilterObjectZodSchema = makeSchema();
