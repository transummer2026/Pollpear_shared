import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      createdAt: z.coerce.date().optional(),
      blockerId: z.number().int(),
      blockedId: z.number().int(),
    })
    .strict();
export const BlockUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BlockUncheckedCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.BlockUncheckedCreateInput>;
export const BlockUncheckedCreateInputObjectZodSchema = makeSchema();
