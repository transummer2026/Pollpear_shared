import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema";

const banattachmentwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => BanAttachmentWhereInputObjectSchema),
        z.lazy(() => BanAttachmentWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BanAttachmentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BanAttachmentWhereInputObjectSchema),
        z.lazy(() => BanAttachmentWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    attachmentUrl: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)])
      .optional(),
    banId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
  })
  .strict();
export const BanAttachmentWhereInputObjectSchema: z.ZodType<Prisma.BanAttachmentWhereInput> =
  banattachmentwhereinputSchema as unknown as z.ZodType<Prisma.BanAttachmentWhereInput>;
export const BanAttachmentWhereInputObjectZodSchema =
  banattachmentwhereinputSchema;
