import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  roomId: SortOrderSchema.optional(),
  inviterId: SortOrderSchema.optional(),
  inviteeId: SortOrderSchema.optional()
}).strict();
export const InvitationSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InvitationSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationSumOrderByAggregateInput>;
export const InvitationSumOrderByAggregateInputObjectZodSchema = makeSchema();
