import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema';
import { UserCreateNestedOneWithoutFriendshipsAsUserBInputObjectSchema as UserCreateNestedOneWithoutFriendshipsAsUserBInputObjectSchema } from './UserCreateNestedOneWithoutFriendshipsAsUserBInput.schema'

const makeSchema = () => z.object({
  status: FriendshipStatusSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  addresseeId: z.number().int(),
  userB: z.lazy(() => UserCreateNestedOneWithoutFriendshipsAsUserBInputObjectSchema)
}).strict();
export const FriendshipCreateWithoutUserAInputObjectSchema: z.ZodType<Prisma.FriendshipCreateWithoutUserAInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateWithoutUserAInput>;
export const FriendshipCreateWithoutUserAInputObjectZodSchema = makeSchema();
