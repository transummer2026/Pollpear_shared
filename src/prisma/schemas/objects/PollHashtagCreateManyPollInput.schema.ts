import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      hashtagId: z.number().int(),
    })
    .strict();
export const PollHashtagCreateManyPollInputObjectSchema: z.ZodType<Prisma.PollHashtagCreateManyPollInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollHashtagCreateManyPollInput>;
export const PollHashtagCreateManyPollInputObjectZodSchema = makeSchema();
