import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  userId: z.literal(true).optional(),
  pollId: z.literal(true).optional()
}).strict();
export const PollTemplateMinAggregateInputObjectSchema: z.ZodType<Prisma.PollTemplateMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateMinAggregateInputType>;
export const PollTemplateMinAggregateInputObjectZodSchema = makeSchema();
