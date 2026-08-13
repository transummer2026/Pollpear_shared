import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  roomId: SortOrderSchema.optional(),
  inviterId: SortOrderSchema.optional(),
  inviteeId: SortOrderSchema.optional()
}).strict();
export const InvitationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InvitationMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationMaxOrderByAggregateInput>;
export const InvitationMaxOrderByAggregateInputObjectZodSchema = makeSchema();
