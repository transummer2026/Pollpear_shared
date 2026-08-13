import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { InvitationStatusSchema } from '../enums/InvitationStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status: InvitationStatusSchema,
  message: z.string().max(255).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  roomId: z.number().int(),
  inviterId: z.number().int(),
  inviteeId: z.number().int()
}).strict();
export const InvitationCreateManyInputObjectSchema: z.ZodType<Prisma.InvitationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateManyInput>;
export const InvitationCreateManyInputObjectZodSchema = makeSchema();
