import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  bannerUrl: SortOrderSchema.optional(),
  publishedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  visibility: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional()
}).strict();
export const RoomMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoomMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMaxOrderByAggregateInput>;
export const RoomMaxOrderByAggregateInputObjectZodSchema = makeSchema();
