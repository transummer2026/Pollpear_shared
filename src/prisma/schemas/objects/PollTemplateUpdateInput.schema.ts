import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      userId: z.number().int(),
      pollId: z.number().int(),
    })
    .strict();
export const PollTemplateUpdateInputObjectSchema: z.ZodType<Prisma.PollTemplateUpdateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUpdateInput>;
export const PollTemplateUpdateInputObjectZodSchema = makeSchema();
