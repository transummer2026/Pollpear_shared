import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  order: z.literal(true).optional(),
  pollId: z.literal(true).optional()
}).strict();
export const OptionSumAggregateInputObjectSchema: z.ZodType<Prisma.OptionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OptionSumAggregateInputType>;
export const OptionSumAggregateInputObjectZodSchema = makeSchema();
