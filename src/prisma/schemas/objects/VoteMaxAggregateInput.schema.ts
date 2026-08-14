import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  freeField: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  pollId: z.literal(true).optional()
}).strict();
export const VoteMaxAggregateInputObjectSchema: z.ZodType<Prisma.VoteMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VoteMaxAggregateInputType>;
export const VoteMaxAggregateInputObjectZodSchema = makeSchema();
