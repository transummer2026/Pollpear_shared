import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      userId: z.number().int(),
      pollId: z.number().int(),
    })
    .strict();
export const PollTemplateCreateManyInputObjectSchema: z.ZodType<Prisma.PollTemplateCreateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollTemplateCreateManyInput>;
export const PollTemplateCreateManyInputObjectZodSchema = makeSchema();
