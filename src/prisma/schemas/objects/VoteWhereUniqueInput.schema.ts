import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
    })
    .strict();
export const VoteWhereUniqueInputObjectSchema: z.ZodType<Prisma.VoteWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.VoteWhereUniqueInput>;
export const VoteWhereUniqueInputObjectZodSchema = makeSchema();
