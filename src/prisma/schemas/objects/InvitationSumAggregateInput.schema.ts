import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  roomId: z.literal(true).optional(),
  inviterId: z.literal(true).optional(),
  inviteeId: z.literal(true).optional()
}).strict();
export const InvitationSumAggregateInputObjectSchema: z.ZodType<Prisma.InvitationSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InvitationSumAggregateInputType>;
export const InvitationSumAggregateInputObjectZodSchema = makeSchema();
