import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { RoomOrderByWithRelationInputObjectSchema as RoomOrderByWithRelationInputObjectSchema } from './RoomOrderByWithRelationInput.schema';
import { OptionOrderByRelationAggregateInputObjectSchema as OptionOrderByRelationAggregateInputObjectSchema } from './OptionOrderByRelationAggregateInput.schema';
import { PollHashtagOrderByRelationAggregateInputObjectSchema as PollHashtagOrderByRelationAggregateInputObjectSchema } from './PollHashtagOrderByRelationAggregateInput.schema';
import { PollTemplateOrderByRelationAggregateInputObjectSchema as PollTemplateOrderByRelationAggregateInputObjectSchema } from './PollTemplateOrderByRelationAggregateInput.schema';
import { ReportOrderByRelationAggregateInputObjectSchema as ReportOrderByRelationAggregateInputObjectSchema } from './ReportOrderByRelationAggregateInput.schema';
import { PollDependencyOrderByRelationAggregateInputObjectSchema as PollDependencyOrderByRelationAggregateInputObjectSchema } from './PollDependencyOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  publishedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updatedAt: SortOrderSchema.optional(),
  endsAt: SortOrderSchema.optional(),
  visibility: SortOrderSchema.optional(),
  allowChangeVote: SortOrderSchema.optional(),
  isAnonymous: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  roomId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  room: z.lazy(() => RoomOrderByWithRelationInputObjectSchema).optional(),
  options: z.lazy(() => OptionOrderByRelationAggregateInputObjectSchema).optional(),
  pollHashtags: z.lazy(() => PollHashtagOrderByRelationAggregateInputObjectSchema).optional(),
  pollTemplates: z.lazy(() => PollTemplateOrderByRelationAggregateInputObjectSchema).optional(),
  reports: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional(),
  childDependencies: z.lazy(() => PollDependencyOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const PollOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PollOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PollOrderByWithRelationInput>;
export const PollOrderByWithRelationInputObjectZodSchema = makeSchema();
