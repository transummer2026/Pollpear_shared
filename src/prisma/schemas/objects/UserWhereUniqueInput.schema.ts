import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      username: z.string().max(32).optional(),
      email: z.string().max(255).optional(),
    })
    .strict();
export const UserWhereUniqueInputObjectSchema: z.ZodType<Prisma.UserWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserWhereUniqueInput>;
export const UserWhereUniqueInputObjectZodSchema = makeSchema();
