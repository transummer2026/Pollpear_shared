import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const HashtagSumAggregateInputObjectSchema: z.ZodType<Prisma.HashtagSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HashtagSumAggregateInputType>;
export const HashtagSumAggregateInputObjectZodSchema = makeSchema();
