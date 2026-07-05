import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { InvitationStatusSchema } from "../enums/InvitationStatus.schema";

const makeSchema = () =>
  z
    .object({
      set: InvitationStatusSchema.optional(),
    })
    .strict();
export const EnumInvitationStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumInvitationStatusFieldUpdateOperationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumInvitationStatusFieldUpdateOperationsInput>;
export const EnumInvitationStatusFieldUpdateOperationsInputObjectZodSchema =
  makeSchema();
