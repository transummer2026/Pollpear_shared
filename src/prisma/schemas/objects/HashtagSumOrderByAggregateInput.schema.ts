import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const HashtagSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HashtagSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagSumOrderByAggregateInput>;
export const HashtagSumOrderByAggregateInputObjectZodSchema = makeSchema();
