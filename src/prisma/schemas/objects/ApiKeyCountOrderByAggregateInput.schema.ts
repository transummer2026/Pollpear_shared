import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  keyHash: SortOrderSchema.optional(),
  appName: SortOrderSchema.optional(),
  revoked: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional()
}).strict();
export const ApiKeyCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ApiKeyCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCountOrderByAggregateInput>;
export const ApiKeyCountOrderByAggregateInputObjectZodSchema = makeSchema();
