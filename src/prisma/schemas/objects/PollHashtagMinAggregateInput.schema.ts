import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  pollId: z.literal(true).optional(),
  hashtagId: z.literal(true).optional()
}).strict();
export const PollHashtagMinAggregateInputObjectSchema: z.ZodType<Prisma.PollHashtagMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagMinAggregateInputType>;
export const PollHashtagMinAggregateInputObjectZodSchema = makeSchema();
