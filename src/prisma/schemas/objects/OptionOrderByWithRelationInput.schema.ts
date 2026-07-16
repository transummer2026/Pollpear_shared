import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PollOrderByWithRelationInputObjectSchema as PollOrderByWithRelationInputObjectSchema } from './PollOrderByWithRelationInput.schema';
import { VoteOptionOrderByRelationAggregateInputObjectSchema as VoteOptionOrderByRelationAggregateInputObjectSchema } from './VoteOptionOrderByRelationAggregateInput.schema';
import { PollDependencyOrderByRelationAggregateInputObjectSchema as PollDependencyOrderByRelationAggregateInputObjectSchema } from './PollDependencyOrderByRelationAggregateInput.schema';
import { ReportOrderByRelationAggregateInputObjectSchema as ReportOrderByRelationAggregateInputObjectSchema } from './ReportOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  sliderLeftLabel: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  sliderRightLabel: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  order: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  pollId: SortOrderSchema.optional(),
  poll: z.lazy(() => PollOrderByWithRelationInputObjectSchema).optional(),
  voteOptions: z.lazy(() => VoteOptionOrderByRelationAggregateInputObjectSchema).optional(),
  pollDependencies: z.lazy(() => PollDependencyOrderByRelationAggregateInputObjectSchema).optional(),
  reports: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const OptionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OptionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionOrderByWithRelationInput>;
export const OptionOrderByWithRelationInputObjectZodSchema = makeSchema();
