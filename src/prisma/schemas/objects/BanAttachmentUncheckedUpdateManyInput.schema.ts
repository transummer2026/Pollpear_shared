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
      banId: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const BanAttachmentUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.BanAttachmentUncheckedUpdateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentUncheckedUpdateManyInput>;
export const BanAttachmentUncheckedUpdateManyInputObjectZodSchema =
  makeSchema();
