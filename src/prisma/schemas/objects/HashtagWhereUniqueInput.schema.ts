import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      name: z.string().max(255).optional(),
    })
    .strict();
export const HashtagWhereUniqueInputObjectSchema: z.ZodType<Prisma.HashtagWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.HashtagWhereUniqueInput>;
export const HashtagWhereUniqueInputObjectZodSchema = makeSchema();
