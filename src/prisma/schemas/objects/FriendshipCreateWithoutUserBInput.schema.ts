import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema';
import { UserCreateNestedOneWithoutFriendshipsAsUserAInputObjectSchema as UserCreateNestedOneWithoutFriendshipsAsUserAInputObjectSchema } from './UserCreateNestedOneWithoutFriendshipsAsUserAInput.schema'

const makeSchema = () => z.object({
  status: FriendshipStatusSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  addresseeId: z.number().int(),
  userA: z.lazy(() => UserCreateNestedOneWithoutFriendshipsAsUserAInputObjectSchema)
}).strict();
export const FriendshipCreateWithoutUserBInputObjectSchema: z.ZodType<Prisma.FriendshipCreateWithoutUserBInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateWithoutUserBInput>;
export const FriendshipCreateWithoutUserBInputObjectZodSchema = makeSchema();
