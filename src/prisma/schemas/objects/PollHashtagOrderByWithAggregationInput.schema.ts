import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PollHashtagCountOrderByAggregateInputObjectSchema as PollHashtagCountOrderByAggregateInputObjectSchema } from './PollHashtagCountOrderByAggregateInput.schema';
import { PollHashtagAvgOrderByAggregateInputObjectSchema as PollHashtagAvgOrderByAggregateInputObjectSchema } from './PollHashtagAvgOrderByAggregateInput.schema';
import { PollHashtagMaxOrderByAggregateInputObjectSchema as PollHashtagMaxOrderByAggregateInputObjectSchema } from './PollHashtagMaxOrderByAggregateInput.schema';
import { PollHashtagMinOrderByAggregateInputObjectSchema as PollHashtagMinOrderByAggregateInputObjectSchema } from './PollHashtagMinOrderByAggregateInput.schema';
import { PollHashtagSumOrderByAggregateInputObjectSchema as PollHashtagSumOrderByAggregateInputObjectSchema } from './PollHashtagSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  pollId: SortOrderSchema.optional(),
  hashtagId: SortOrderSchema.optional(),
  _count: z.lazy(() => PollHashtagCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PollHashtagAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PollHashtagMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PollHashtagMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PollHashtagSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PollHashtagOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PollHashtagOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagOrderByWithAggregationInput>;
export const PollHashtagOrderByWithAggregationInputObjectZodSchema = makeSchema();
