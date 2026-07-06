import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
    })
    .strict();
export const BanWhereUniqueInputObjectSchema: z.ZodType<Prisma.BanWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.BanWhereUniqueInput>;
export const BanWhereUniqueInputObjectZodSchema = makeSchema();
