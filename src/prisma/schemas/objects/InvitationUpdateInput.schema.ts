import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { InvitationStatusSchema } from "../enums/InvitationStatus.schema";
import { EnumInvitationStatusFieldUpdateOperationsInputObjectSchema as EnumInvitationStatusFieldUpdateOperationsInputObjectSchema } from "./EnumInvitationStatusFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";

const makeSchema = () =>
  z
    .object({
      status: z
        .union([
          InvitationStatusSchema,
          z.lazy(
            () => EnumInvitationStatusFieldUpdateOperationsInputObjectSchema,
          ),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      label: z
        .union([
          z.string().max(255),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      roomId: z.number().int(),
      inviterId: z.number().int(),
      inviteeId: z.number().int(),
    })
    .strict();
export const InvitationUpdateInputObjectSchema: z.ZodType<Prisma.InvitationUpdateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.InvitationUpdateInput>;
export const InvitationUpdateInputObjectZodSchema = makeSchema();
