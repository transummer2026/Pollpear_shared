import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  pollId: z.literal(true).optional(),
  hashtagId: z.literal(true).optional()
}).strict();
export const PollHashtagAvgAggregateInputObjectSchema: z.ZodType<Prisma.PollHashtagAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagAvgAggregateInputType>;
export const PollHashtagAvgAggregateInputObjectZodSchema = makeSchema();
