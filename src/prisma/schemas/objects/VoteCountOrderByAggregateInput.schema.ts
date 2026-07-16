import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional()
}).strict();
export const VoteCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VoteCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCountOrderByAggregateInput>;
export const VoteCountOrderByAggregateInputObjectZodSchema = makeSchema();
