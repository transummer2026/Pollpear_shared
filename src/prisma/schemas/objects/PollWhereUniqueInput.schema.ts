import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
    })
    .strict();
export const PollWhereUniqueInputObjectSchema: z.ZodType<Prisma.PollWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollWhereUniqueInput>;
export const PollWhereUniqueInputObjectZodSchema = makeSchema();
