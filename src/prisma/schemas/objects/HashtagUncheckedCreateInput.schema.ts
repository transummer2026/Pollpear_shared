import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      name: z.string().max(255),
      isVisible: z.boolean(),
    })
    .strict();
export const HashtagUncheckedCreateInputObjectSchema: z.ZodType<Prisma.HashtagUncheckedCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.HashtagUncheckedCreateInput>;
export const HashtagUncheckedCreateInputObjectZodSchema = makeSchema();
