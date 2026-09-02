import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  userId: z.literal(true).optional(),
  pollId: z.literal(true).optional()
}).strict();
export const PollTemplateSumAggregateInputObjectSchema: z.ZodType<Prisma.PollTemplateSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateSumAggregateInputType>;
export const PollTemplateSumAggregateInputObjectZodSchema = makeSchema();
