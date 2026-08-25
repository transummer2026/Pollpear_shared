import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  requesterId: SortOrderSchema.optional(),
  addresseeId: SortOrderSchema.optional(),
  requester: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  addressee: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const FriendshipOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.FriendshipOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipOrderByWithRelationInput>;
export const FriendshipOrderByWithRelationInputObjectZodSchema = makeSchema();
