import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status: InvitationStatusSchema,
  createdAt: z.coerce.date().optional(),
  label: z.string().max(255).optional().nullable(),
  roomId: z.number().int(),
  inviterId: z.number().int(),
  inviteeId: z.number().int()
}).strict();
export const InvitationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.InvitationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUncheckedCreateInput>;
export const InvitationUncheckedCreateInputObjectZodSchema = makeSchema();
