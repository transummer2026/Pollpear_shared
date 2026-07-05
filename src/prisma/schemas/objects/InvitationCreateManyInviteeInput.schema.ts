import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { InvitationStatusSchema } from "../enums/InvitationStatus.schema";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      status: InvitationStatusSchema,
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      label: z.string().max(255).optional().nullable(),
      roomId: z.number().int(),
      inviterId: z.number().int(),
    })
    .strict();
export const InvitationCreateManyInviteeInputObjectSchema: z.ZodType<Prisma.InvitationCreateManyInviteeInput> =
  makeSchema() as unknown as z.ZodType<Prisma.InvitationCreateManyInviteeInput>;
export const InvitationCreateManyInviteeInputObjectZodSchema = makeSchema();
