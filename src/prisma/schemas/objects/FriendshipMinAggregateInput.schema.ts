import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  requesterId: z.literal(true).optional(),
  addresseeId: z.literal(true).optional()
}).strict();
export const FriendshipMinAggregateInputObjectSchema: z.ZodType<Prisma.FriendshipMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipMinAggregateInputType>;
export const FriendshipMinAggregateInputObjectZodSchema = makeSchema();
