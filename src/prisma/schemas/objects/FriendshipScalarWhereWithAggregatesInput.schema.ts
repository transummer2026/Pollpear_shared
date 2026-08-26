import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumFriendshipStatusWithAggregatesFilterObjectSchema as EnumFriendshipStatusWithAggregatesFilterObjectSchema } from './EnumFriendshipStatusWithAggregatesFilter.schema';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const friendshipscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => FriendshipScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FriendshipScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FriendshipScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FriendshipScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FriendshipScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumFriendshipStatusWithAggregatesFilterObjectSchema), FriendshipStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  userAId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  userBId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  addresseeId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const FriendshipScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.FriendshipScalarWhereWithAggregatesInput> = friendshipscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.FriendshipScalarWhereWithAggregatesInput>;
export const FriendshipScalarWhereWithAggregatesInputObjectZodSchema = friendshipscalarwherewithaggregatesinputSchema;
