import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PollHashtagOrderByRelationAggregateInputObjectSchema as PollHashtagOrderByRelationAggregateInputObjectSchema } from './PollHashtagOrderByRelationAggregateInput.schema';
import { ReportOrderByRelationAggregateInputObjectSchema as ReportOrderByRelationAggregateInputObjectSchema } from './ReportOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pollHashtags: z.lazy(() => PollHashtagOrderByRelationAggregateInputObjectSchema).optional(),
  reports: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const HashtagOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.HashtagOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagOrderByWithRelationInput>;
export const HashtagOrderByWithRelationInputObjectZodSchema = makeSchema();
