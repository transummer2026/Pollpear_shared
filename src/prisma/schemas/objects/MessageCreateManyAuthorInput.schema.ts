import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      content: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      deletedAt: z.coerce.date().optional().nullable(),
      roomId: z.number().int(),
    })
    .strict();
export const MessageCreateManyAuthorInputObjectSchema: z.ZodType<Prisma.MessageCreateManyAuthorInput> =
  makeSchema() as unknown as z.ZodType<Prisma.MessageCreateManyAuthorInput>;
export const MessageCreateManyAuthorInputObjectZodSchema = makeSchema();
