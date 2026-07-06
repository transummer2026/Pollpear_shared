import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
    })
    .strict();
export const BanAttachmentWhereUniqueInputObjectSchema: z.ZodType<Prisma.BanAttachmentWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.BanAttachmentWhereUniqueInput>;
export const BanAttachmentWhereUniqueInputObjectZodSchema = makeSchema();
