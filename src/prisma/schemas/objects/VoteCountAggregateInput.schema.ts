import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  label: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  pollId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const VoteCountAggregateInputObjectSchema: z.ZodType<Prisma.VoteCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VoteCountAggregateInputType>;
export const VoteCountAggregateInputObjectZodSchema = makeSchema();
