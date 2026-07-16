import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  userId: z.literal(true).optional(),
  pollId: z.literal(true).optional()
}).strict();
export const PollTemplateMaxAggregateInputObjectSchema: z.ZodType<Prisma.PollTemplateMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateMaxAggregateInputType>;
export const PollTemplateMaxAggregateInputObjectZodSchema = makeSchema();
