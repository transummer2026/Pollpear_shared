import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status: FriendshipStatusSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  requesterId: z.number().int()
}).strict();
export const FriendshipUncheckedCreateWithoutAddresseeInputObjectSchema: z.ZodType<Prisma.FriendshipUncheckedCreateWithoutAddresseeInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUncheckedCreateWithoutAddresseeInput>;
export const FriendshipUncheckedCreateWithoutAddresseeInputObjectZodSchema = makeSchema();
