import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  type: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  publishedAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  endsAt: z.literal(true).optional(),
  visibility: z.literal(true).optional(),
  allowChangeVote: z.literal(true).optional(),
  isAnonymous: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  roomId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PollCountAggregateInputObjectSchema: z.ZodType<Prisma.PollCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PollCountAggregateInputType>;
export const PollCountAggregateInputObjectZodSchema = makeSchema();
