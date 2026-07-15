import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status: InvitationStatusSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  label: z.string().optional().nullable(),
  inviterId: z.number().int(),
  inviteeId: z.number().int()
}).strict();
export const InvitationUncheckedCreateWithoutRoomInputObjectSchema: z.ZodType<Prisma.InvitationUncheckedCreateWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationUncheckedCreateWithoutRoomInput>;
export const InvitationUncheckedCreateWithoutRoomInputObjectZodSchema = makeSchema();
