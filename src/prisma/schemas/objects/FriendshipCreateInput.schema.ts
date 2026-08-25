import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema';
import { UserCreateNestedOneWithoutFriendshipsAsUserAInputObjectSchema as UserCreateNestedOneWithoutFriendshipsAsUserAInputObjectSchema } from './UserCreateNestedOneWithoutFriendshipsAsUserAInput.schema';
import { UserCreateNestedOneWithoutFriendshipsAsUserBInputObjectSchema as UserCreateNestedOneWithoutFriendshipsAsUserBInputObjectSchema } from './UserCreateNestedOneWithoutFriendshipsAsUserBInput.schema'

const makeSchema = () => z.object({
  status: FriendshipStatusSchema,
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  addresseeId: z.number().int(),
  userA: z.lazy(() => UserCreateNestedOneWithoutFriendshipsAsUserAInputObjectSchema),
  userB: z.lazy(() => UserCreateNestedOneWithoutFriendshipsAsUserBInputObjectSchema)
}).strict();
export const FriendshipCreateInputObjectSchema: z.ZodType<Prisma.FriendshipCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateInput>;
export const FriendshipCreateInputObjectZodSchema = makeSchema();
