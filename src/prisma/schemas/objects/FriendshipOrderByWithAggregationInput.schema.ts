import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FriendshipCountOrderByAggregateInputObjectSchema as FriendshipCountOrderByAggregateInputObjectSchema } from './FriendshipCountOrderByAggregateInput.schema';
import { FriendshipAvgOrderByAggregateInputObjectSchema as FriendshipAvgOrderByAggregateInputObjectSchema } from './FriendshipAvgOrderByAggregateInput.schema';
import { FriendshipMaxOrderByAggregateInputObjectSchema as FriendshipMaxOrderByAggregateInputObjectSchema } from './FriendshipMaxOrderByAggregateInput.schema';
import { FriendshipMinOrderByAggregateInputObjectSchema as FriendshipMinOrderByAggregateInputObjectSchema } from './FriendshipMinOrderByAggregateInput.schema';
import { FriendshipSumOrderByAggregateInputObjectSchema as FriendshipSumOrderByAggregateInputObjectSchema } from './FriendshipSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  requesterId: SortOrderSchema.optional(),
  addresseeId: SortOrderSchema.optional(),
  _count: z.lazy(() => FriendshipCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => FriendshipAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FriendshipMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FriendshipMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => FriendshipSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FriendshipOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FriendshipOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipOrderByWithAggregationInput>;
export const FriendshipOrderByWithAggregationInputObjectZodSchema = makeSchema();
