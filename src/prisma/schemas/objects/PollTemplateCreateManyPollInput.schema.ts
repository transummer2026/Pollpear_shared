import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      userId: z.number().int(),
    })
    .strict();
export const PollTemplateCreateManyPollInputObjectSchema: z.ZodType<Prisma.PollTemplateCreateManyPollInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollTemplateCreateManyPollInput>;
export const PollTemplateCreateManyPollInputObjectZodSchema = makeSchema();
