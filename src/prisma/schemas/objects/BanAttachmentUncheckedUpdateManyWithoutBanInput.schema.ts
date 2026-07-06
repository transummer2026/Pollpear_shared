import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";

const makeSchema = () =>
  z
    .object({
      id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      attachmentUrl: z
        .union([
          z.string().max(255),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const BanAttachmentUncheckedUpdateManyWithoutBanInputObjectSchema: z.ZodType<Prisma.BanAttachmentUncheckedUpdateManyWithoutBanInput> =
  makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentUncheckedUpdateManyWithoutBanInput>;
export const BanAttachmentUncheckedUpdateManyWithoutBanInputObjectZodSchema =
  makeSchema();
