import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userAId: SortOrderSchema.optional(),
  userBId: SortOrderSchema.optional(),
  addresseeId: SortOrderSchema.optional()
}).strict();
export const FriendshipAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FriendshipAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipAvgOrderByAggregateInput>;
export const FriendshipAvgOrderByAggregateInputObjectZodSchema = makeSchema();
