import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { PollOrderByRelationAggregateInputObjectSchema as PollOrderByRelationAggregateInputObjectSchema } from './PollOrderByRelationAggregateInput.schema';
import { MessageOrderByRelationAggregateInputObjectSchema as MessageOrderByRelationAggregateInputObjectSchema } from './MessageOrderByRelationAggregateInput.schema';
import { InvitationOrderByRelationAggregateInputObjectSchema as InvitationOrderByRelationAggregateInputObjectSchema } from './InvitationOrderByRelationAggregateInput.schema';
import { RoomMemberOrderByRelationAggregateInputObjectSchema as RoomMemberOrderByRelationAggregateInputObjectSchema } from './RoomMemberOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bannerUrl: SortOrderSchema.optional(),
  endsAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  visibility: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  polls: z.lazy(() => PollOrderByRelationAggregateInputObjectSchema).optional(),
  messages: z.lazy(() => MessageOrderByRelationAggregateInputObjectSchema).optional(),
  invitations: z.lazy(() => InvitationOrderByRelationAggregateInputObjectSchema).optional(),
  roomMembers: z.lazy(() => RoomMemberOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const RoomOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RoomOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomOrderByWithRelationInput>;
export const RoomOrderByWithRelationInputObjectZodSchema = makeSchema();
