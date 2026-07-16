import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const HashtagAvgAggregateInputObjectSchema: z.ZodType<Prisma.HashtagAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HashtagAvgAggregateInputType>;
export const HashtagAvgAggregateInputObjectZodSchema = makeSchema();
