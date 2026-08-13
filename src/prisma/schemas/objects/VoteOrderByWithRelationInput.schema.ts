import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PollOrderByWithRelationInputObjectSchema as PollOrderByWithRelationInputObjectSchema } from './PollOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { VoteOptionOrderByRelationAggregateInputObjectSchema as VoteOptionOrderByRelationAggregateInputObjectSchema } from './VoteOptionOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  freeField: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdById: SortOrderSchema.optional(),
  pollId: SortOrderSchema.optional(),
  poll: z.lazy(() => PollOrderByWithRelationInputObjectSchema).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  voteOptions: z.lazy(() => VoteOptionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const VoteOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.VoteOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOrderByWithRelationInput>;
export const VoteOrderByWithRelationInputObjectZodSchema = makeSchema();
