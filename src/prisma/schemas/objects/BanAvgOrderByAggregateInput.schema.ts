import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  bannedById: SortOrderSchema.optional(),
  unbannedById: SortOrderSchema.optional()
}).strict();
export const BanAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BanAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BanAvgOrderByAggregateInput>;
export const BanAvgOrderByAggregateInputObjectZodSchema = makeSchema();
