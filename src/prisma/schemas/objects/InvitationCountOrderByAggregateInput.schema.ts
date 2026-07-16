import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  roomId: SortOrderSchema.optional(),
  inviterId: SortOrderSchema.optional(),
  inviteeId: SortOrderSchema.optional()
}).strict();
export const InvitationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InvitationCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCountOrderByAggregateInput>;
export const InvitationCountOrderByAggregateInputObjectZodSchema = makeSchema();
