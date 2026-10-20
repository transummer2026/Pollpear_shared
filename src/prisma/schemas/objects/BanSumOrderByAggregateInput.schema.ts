import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  bannedById: SortOrderSchema.optional(),
  unbannedById: SortOrderSchema.optional()
}).strict();
export const BanSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BanSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BanSumOrderByAggregateInput>;
export const BanSumOrderByAggregateInputObjectZodSchema = makeSchema();
