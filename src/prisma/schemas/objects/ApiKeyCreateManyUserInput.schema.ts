import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      keyHash: z.string().max(255),
      appName: z.string().max(255),
      revoked: z.boolean().optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();
export const ApiKeyCreateManyUserInputObjectSchema: z.ZodType<Prisma.ApiKeyCreateManyUserInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateManyUserInput>;
export const ApiKeyCreateManyUserInputObjectZodSchema = makeSchema();
