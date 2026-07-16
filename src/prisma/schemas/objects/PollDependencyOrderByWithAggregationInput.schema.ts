import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PollDependencyCountOrderByAggregateInputObjectSchema as PollDependencyCountOrderByAggregateInputObjectSchema } from './PollDependencyCountOrderByAggregateInput.schema';
import { PollDependencyAvgOrderByAggregateInputObjectSchema as PollDependencyAvgOrderByAggregateInputObjectSchema } from './PollDependencyAvgOrderByAggregateInput.schema';
import { PollDependencyMaxOrderByAggregateInputObjectSchema as PollDependencyMaxOrderByAggregateInputObjectSchema } from './PollDependencyMaxOrderByAggregateInput.schema';
import { PollDependencyMinOrderByAggregateInputObjectSchema as PollDependencyMinOrderByAggregateInputObjectSchema } from './PollDependencyMinOrderByAggregateInput.schema';
import { PollDependencySumOrderByAggregateInputObjectSchema as PollDependencySumOrderByAggregateInputObjectSchema } from './PollDependencySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  childPollId: SortOrderSchema.optional(),
  optionId: SortOrderSchema.optional(),
  _count: z.lazy(() => PollDependencyCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PollDependencyAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PollDependencyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PollDependencyMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PollDependencySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PollDependencyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PollDependencyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyOrderByWithAggregationInput>;
export const PollDependencyOrderByWithAggregationInputObjectZodSchema = makeSchema();
