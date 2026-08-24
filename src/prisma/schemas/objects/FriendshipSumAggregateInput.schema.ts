import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userAId: z.literal(true).optional(),
  userBId: z.literal(true).optional(),
  addresseeId: z.literal(true).optional()
}).strict();
export const FriendshipSumAggregateInputObjectSchema: z.ZodType<Prisma.FriendshipSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipSumAggregateInputType>;
export const FriendshipSumAggregateInputObjectZodSchema = makeSchema();
