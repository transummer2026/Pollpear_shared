import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  requesterId: SortOrderSchema.optional(),
  addresseeId: SortOrderSchema.optional()
}).strict();
export const FriendshipSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FriendshipSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipSumOrderByAggregateInput>;
export const FriendshipSumOrderByAggregateInputObjectZodSchema = makeSchema();
