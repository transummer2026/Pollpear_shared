import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  label: z.literal(true).optional(),
  roomId: z.literal(true).optional(),
  inviterId: z.literal(true).optional(),
  inviteeId: z.literal(true).optional()
}).strict();
export const InvitationMaxAggregateInputObjectSchema: z.ZodType<Prisma.InvitationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InvitationMaxAggregateInputType>;
export const InvitationMaxAggregateInputObjectZodSchema = makeSchema();
