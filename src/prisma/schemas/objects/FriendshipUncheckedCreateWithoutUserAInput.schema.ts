import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status: FriendshipStatusSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userBId: z.number().int(),
  addresseeId: z.number().int()
}).strict();
export const FriendshipUncheckedCreateWithoutUserAInputObjectSchema: z.ZodType<Prisma.FriendshipUncheckedCreateWithoutUserAInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUncheckedCreateWithoutUserAInput>;
export const FriendshipUncheckedCreateWithoutUserAInputObjectZodSchema = makeSchema();
