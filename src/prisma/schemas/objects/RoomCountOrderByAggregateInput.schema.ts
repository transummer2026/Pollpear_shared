import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  publishedAt: SortOrderSchema.optional(),
  bannerUrl: SortOrderSchema.optional(),
  visibility: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional()
}).strict();
export const RoomCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoomCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCountOrderByAggregateInput>;
export const RoomCountOrderByAggregateInputObjectZodSchema = makeSchema();
