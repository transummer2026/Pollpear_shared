import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  pollId: z.literal(true).optional(),
  hashtagId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PollHashtagCountAggregateInputObjectSchema: z.ZodType<Prisma.PollHashtagCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagCountAggregateInputType>;
export const PollHashtagCountAggregateInputObjectZodSchema = makeSchema();
