import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  isVisible: SortOrderSchema.optional()
}).strict();
export const HashtagCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.HashtagCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagCountOrderByAggregateInput>;
export const HashtagCountOrderByAggregateInputObjectZodSchema = makeSchema();
