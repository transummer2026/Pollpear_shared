import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  blockerId: SortOrderSchema.optional(),
  blockedId: SortOrderSchema.optional()
}).strict();
export const BlockAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BlockAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockAvgOrderByAggregateInput>;
export const BlockAvgOrderByAggregateInputObjectZodSchema = makeSchema();
