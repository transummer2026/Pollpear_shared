import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status: FriendshipStatusSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  addresseeId: z.number().int()
}).strict();
export const FriendshipUncheckedCreateWithoutRequesterInputObjectSchema: z.ZodType<Prisma.FriendshipUncheckedCreateWithoutRequesterInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUncheckedCreateWithoutRequesterInput>;
export const FriendshipUncheckedCreateWithoutRequesterInputObjectZodSchema = makeSchema();
