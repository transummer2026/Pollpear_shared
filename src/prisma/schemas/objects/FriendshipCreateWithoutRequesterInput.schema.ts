import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema';
import { UserCreateNestedOneWithoutFriendshipsReceivedInputObjectSchema as UserCreateNestedOneWithoutFriendshipsReceivedInputObjectSchema } from './UserCreateNestedOneWithoutFriendshipsReceivedInput.schema'

const makeSchema = () => z.object({
  status: FriendshipStatusSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  addressee: z.lazy(() => UserCreateNestedOneWithoutFriendshipsReceivedInputObjectSchema)
}).strict();
export const FriendshipCreateWithoutRequesterInputObjectSchema: z.ZodType<Prisma.FriendshipCreateWithoutRequesterInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateWithoutRequesterInput>;
export const FriendshipCreateWithoutRequesterInputObjectZodSchema = makeSchema();
