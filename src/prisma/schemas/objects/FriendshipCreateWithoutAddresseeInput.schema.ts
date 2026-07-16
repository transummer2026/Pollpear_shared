import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema';
import { UserCreateNestedOneWithoutFriendshipsRequestedInputObjectSchema as UserCreateNestedOneWithoutFriendshipsRequestedInputObjectSchema } from './UserCreateNestedOneWithoutFriendshipsRequestedInput.schema'

const makeSchema = () => z.object({
  status: FriendshipStatusSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  requester: z.lazy(() => UserCreateNestedOneWithoutFriendshipsRequestedInputObjectSchema)
}).strict();
export const FriendshipCreateWithoutAddresseeInputObjectSchema: z.ZodType<Prisma.FriendshipCreateWithoutAddresseeInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateWithoutAddresseeInput>;
export const FriendshipCreateWithoutAddresseeInputObjectZodSchema = makeSchema();
