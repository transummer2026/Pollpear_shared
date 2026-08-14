import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status: InvitationStatusSchema,
  message: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  roomId: z.number().int(),
  inviterId: z.number().int()
}).strict();
export const InvitationUncheckedCreateWithoutInviteeInputObjectSchema: z.ZodType<Prisma.InvitationUncheckedCreateWithoutInviteeInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUncheckedCreateWithoutInviteeInput>;
export const InvitationUncheckedCreateWithoutInviteeInputObjectZodSchema = makeSchema();
