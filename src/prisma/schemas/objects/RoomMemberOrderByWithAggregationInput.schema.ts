import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RoomMemberCountOrderByAggregateInputObjectSchema as RoomMemberCountOrderByAggregateInputObjectSchema } from './RoomMemberCountOrderByAggregateInput.schema';
import { RoomMemberAvgOrderByAggregateInputObjectSchema as RoomMemberAvgOrderByAggregateInputObjectSchema } from './RoomMemberAvgOrderByAggregateInput.schema';
import { RoomMemberMaxOrderByAggregateInputObjectSchema as RoomMemberMaxOrderByAggregateInputObjectSchema } from './RoomMemberMaxOrderByAggregateInput.schema';
import { RoomMemberMinOrderByAggregateInputObjectSchema as RoomMemberMinOrderByAggregateInputObjectSchema } from './RoomMemberMinOrderByAggregateInput.schema';
import { RoomMemberSumOrderByAggregateInputObjectSchema as RoomMemberSumOrderByAggregateInputObjectSchema } from './RoomMemberSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  joinedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  roomId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => RoomMemberCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RoomMemberAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RoomMemberMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RoomMemberMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RoomMemberSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RoomMemberOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RoomMemberOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberOrderByWithAggregationInput>;
export const RoomMemberOrderByWithAggregationInputObjectZodSchema = makeSchema();
