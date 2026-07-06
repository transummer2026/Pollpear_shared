import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      content: z.string(),
      createdAt: z.coerce.date().optional(),
      deletedAt: z.coerce.date().optional().nullable(),
      authorId: z.number().int(),
      roomId: z.number().int(),
    })
    .strict();
export const MessageUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MessageUncheckedCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.MessageUncheckedCreateInput>;
export const MessageUncheckedCreateInputObjectZodSchema = makeSchema();
