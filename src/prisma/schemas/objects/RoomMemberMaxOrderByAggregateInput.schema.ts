import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  joinedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  roomId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const RoomMemberMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoomMemberMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberMaxOrderByAggregateInput>;
export const RoomMemberMaxOrderByAggregateInputObjectZodSchema = makeSchema();
