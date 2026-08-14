import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumFriendshipStatusFilterObjectSchema as EnumFriendshipStatusFilterObjectSchema } from './EnumFriendshipStatusFilter.schema';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const friendshipwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FriendshipWhereInputObjectSchema), z.lazy(() => FriendshipWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FriendshipWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FriendshipWhereInputObjectSchema), z.lazy(() => FriendshipWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumFriendshipStatusFilterObjectSchema), FriendshipStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  requesterId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  addresseeId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  requester: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  addressee: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const FriendshipWhereInputObjectSchema: z.ZodType<Prisma.FriendshipWhereInput> = friendshipwhereinputSchema as unknown as z.ZodType<Prisma.FriendshipWhereInput>;
export const FriendshipWhereInputObjectZodSchema = friendshipwhereinputSchema;
