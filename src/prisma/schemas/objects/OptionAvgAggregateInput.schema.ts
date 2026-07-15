import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  order: z.literal(true).optional(),
  pollId: z.literal(true).optional()
}).strict();
export const OptionAvgAggregateInputObjectSchema: z.ZodType<Prisma.OptionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OptionAvgAggregateInputType>;
export const OptionAvgAggregateInputObjectZodSchema = makeSchema();
