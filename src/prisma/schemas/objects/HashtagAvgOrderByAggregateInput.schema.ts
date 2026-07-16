import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const HashtagAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HashtagAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagAvgOrderByAggregateInput>;
export const HashtagAvgOrderByAggregateInputObjectZodSchema = makeSchema();
