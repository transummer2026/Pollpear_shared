import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  freeField: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  pollId: SortOrderSchema.optional()
}).strict();
export const VoteMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VoteMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteMinOrderByAggregateInput>;
export const VoteMinOrderByAggregateInputObjectZodSchema = makeSchema();
