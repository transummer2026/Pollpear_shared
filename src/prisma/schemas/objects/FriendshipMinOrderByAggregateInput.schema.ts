import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  requesterId: SortOrderSchema.optional(),
  addresseeId: SortOrderSchema.optional()
}).strict();
export const FriendshipMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FriendshipMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipMinOrderByAggregateInput>;
export const FriendshipMinOrderByAggregateInputObjectZodSchema = makeSchema();
