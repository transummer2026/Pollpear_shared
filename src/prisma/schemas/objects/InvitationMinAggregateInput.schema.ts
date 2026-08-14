import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status: z.literal(true).optional(),
  message: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  roomId: z.literal(true).optional(),
  inviterId: z.literal(true).optional(),
  inviteeId: z.literal(true).optional()
}).strict();
export const InvitationMinAggregateInputObjectSchema: z.ZodType<Prisma.InvitationMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InvitationMinAggregateInputType>;
export const InvitationMinAggregateInputObjectZodSchema = makeSchema();
