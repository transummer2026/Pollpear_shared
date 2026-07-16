import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PollTemplateCountOrderByAggregateInputObjectSchema as PollTemplateCountOrderByAggregateInputObjectSchema } from './PollTemplateCountOrderByAggregateInput.schema';
import { PollTemplateAvgOrderByAggregateInputObjectSchema as PollTemplateAvgOrderByAggregateInputObjectSchema } from './PollTemplateAvgOrderByAggregateInput.schema';
import { PollTemplateMaxOrderByAggregateInputObjectSchema as PollTemplateMaxOrderByAggregateInputObjectSchema } from './PollTemplateMaxOrderByAggregateInput.schema';
import { PollTemplateMinOrderByAggregateInputObjectSchema as PollTemplateMinOrderByAggregateInputObjectSchema } from './PollTemplateMinOrderByAggregateInput.schema';
import { PollTemplateSumOrderByAggregateInputObjectSchema as PollTemplateSumOrderByAggregateInputObjectSchema } from './PollTemplateSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  pollId: SortOrderSchema.optional(),
  _count: z.lazy(() => PollTemplateCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PollTemplateAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PollTemplateMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PollTemplateMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PollTemplateSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PollTemplateOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PollTemplateOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateOrderByWithAggregationInput>;
export const PollTemplateOrderByWithAggregationInputObjectZodSchema = makeSchema();
