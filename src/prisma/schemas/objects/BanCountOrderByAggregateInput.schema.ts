import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  banReason: SortOrderSchema.optional(),
  unbanReason: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional(),
  endedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  bannedById: SortOrderSchema.optional(),
  unbannedById: SortOrderSchema.optional()
}).strict();
export const BanCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BanCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BanCountOrderByAggregateInput>;
export const BanCountOrderByAggregateInputObjectZodSchema = makeSchema();
