import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  requesterId: SortOrderSchema.optional(),
  addresseeId: SortOrderSchema.optional()
}).strict();
export const FriendshipMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FriendshipMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipMaxOrderByAggregateInput>;
export const FriendshipMaxOrderByAggregateInputObjectZodSchema = makeSchema();
