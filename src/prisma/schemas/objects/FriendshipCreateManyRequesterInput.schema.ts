import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { FriendshipStatusSchema } from '../enums/FriendshipStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status: FriendshipStatusSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  addresseeId: z.number().int()
}).strict();
export const FriendshipCreateManyRequesterInputObjectSchema: z.ZodType<Prisma.FriendshipCreateManyRequesterInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateManyRequesterInput>;
export const FriendshipCreateManyRequesterInputObjectZodSchema = makeSchema();
