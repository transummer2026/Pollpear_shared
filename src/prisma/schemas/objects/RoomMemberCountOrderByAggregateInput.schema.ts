import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  joinedAt: SortOrderSchema.optional(),
  roomId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const RoomMemberCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoomMemberCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberCountOrderByAggregateInput>;
export const RoomMemberCountOrderByAggregateInputObjectZodSchema = makeSchema();
