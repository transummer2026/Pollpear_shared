import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RoomOrderByWithRelationInputObjectSchema as RoomOrderByWithRelationInputObjectSchema } from './RoomOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  label: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  roomId: SortOrderSchema.optional(),
  inviterId: SortOrderSchema.optional(),
  inviteeId: SortOrderSchema.optional(),
  room: z.lazy(() => RoomOrderByWithRelationInputObjectSchema).optional(),
  inviter: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  invitee: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const InvitationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.InvitationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationOrderByWithRelationInput>;
export const InvitationOrderByWithRelationInputObjectZodSchema = makeSchema();
