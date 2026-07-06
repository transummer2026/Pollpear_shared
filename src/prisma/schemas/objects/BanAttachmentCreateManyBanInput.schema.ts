import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      attachmentUrl: z.string().max(255),
    })
    .strict();
export const BanAttachmentCreateManyBanInputObjectSchema: z.ZodType<Prisma.BanAttachmentCreateManyBanInput> =
  makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentCreateManyBanInput>;
export const BanAttachmentCreateManyBanInputObjectZodSchema = makeSchema();
