import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema';
import { UserCreateNestedOneWithoutFriendshipsRequestedInputObjectSchema as UserCreateNestedOneWithoutFriendshipsRequestedInputObjectSchema } from './UserCreateNestedOneWithoutFriendshipsRequestedInput.schema';
import { UserCreateNestedOneWithoutFriendshipsReceivedInputObjectSchema as UserCreateNestedOneWithoutFriendshipsReceivedInputObjectSchema } from './UserCreateNestedOneWithoutFriendshipsReceivedInput.schema'

const makeSchema = () => z.object({
  status: FriendshipStatusSchema,
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  requester: z.lazy(() => UserCreateNestedOneWithoutFriendshipsRequestedInputObjectSchema),
  addressee: z.lazy(() => UserCreateNestedOneWithoutFriendshipsReceivedInputObjectSchema)
}).strict();
export const FriendshipCreateInputObjectSchema: z.ZodType<Prisma.FriendshipCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateInput>;
export const FriendshipCreateInputObjectZodSchema = makeSchema();
