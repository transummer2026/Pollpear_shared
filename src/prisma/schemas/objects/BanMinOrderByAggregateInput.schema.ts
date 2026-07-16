import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  banReason: SortOrderSchema.optional(),
  bannedAt: SortOrderSchema.optional(),
  unbannedAt: SortOrderSchema.optional(),
  unbanReason: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  bannedById: SortOrderSchema.optional(),
  unbannedById: SortOrderSchema.optional()
}).strict();
export const BanMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BanMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BanMinOrderByAggregateInput>;
export const BanMinOrderByAggregateInputObjectZodSchema = makeSchema();
