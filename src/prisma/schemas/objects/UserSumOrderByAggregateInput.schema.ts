import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  score: SortOrderSchema.optional()
}).strict();
export const UserSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSumOrderByAggregateInput>;
export const UserSumOrderByAggregateInputObjectZodSchema = makeSchema();
