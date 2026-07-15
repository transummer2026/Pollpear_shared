import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  roomId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const RoomMemberSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RoomMemberSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberSumOrderByAggregateInput>;
export const RoomMemberSumOrderByAggregateInputObjectZodSchema = makeSchema();
