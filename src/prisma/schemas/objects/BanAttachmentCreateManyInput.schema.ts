import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      attachmentUrl: z.string().max(255),
      banId: z.number().int(),
    })
    .strict();
export const BanAttachmentCreateManyInputObjectSchema: z.ZodType<Prisma.BanAttachmentCreateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentCreateManyInput>;
export const BanAttachmentCreateManyInputObjectZodSchema = makeSchema();
