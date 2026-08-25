import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  userAId: z.literal(true).optional(),
  userBId: z.literal(true).optional(),
  addresseeId: z.literal(true).optional()
}).strict();
export const FriendshipMaxAggregateInputObjectSchema: z.ZodType<Prisma.FriendshipMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipMaxAggregateInputType>;
export const FriendshipMaxAggregateInputObjectZodSchema = makeSchema();
