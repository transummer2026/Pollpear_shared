import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      pollId: z.number().int(),
      hashtagId: z.number().int(),
    })
    .strict();
export const PollHashtagCreateManyInputObjectSchema: z.ZodType<Prisma.PollHashtagCreateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollHashtagCreateManyInput>;
export const PollHashtagCreateManyInputObjectZodSchema = makeSchema();
