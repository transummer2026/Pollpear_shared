import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      pollId: z.number().int(),
      hashtagId: z.number().int(),
    })
    .strict();
export const PollHashtagUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PollHashtagUncheckedCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUncheckedCreateInput>;
export const PollHashtagUncheckedCreateInputObjectZodSchema = makeSchema();
