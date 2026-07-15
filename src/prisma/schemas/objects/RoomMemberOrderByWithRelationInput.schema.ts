import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoomOrderByWithRelationInputObjectSchema as RoomOrderByWithRelationInputObjectSchema } from './RoomOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  joinedAt: SortOrderSchema.optional(),
  roomId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  room: z.lazy(() => RoomOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const RoomMemberOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RoomMemberOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberOrderByWithRelationInput>;
export const RoomMemberOrderByWithRelationInputObjectZodSchema = makeSchema();
