import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      pollId: z.number().int(),
      hashtagId: z.number().int(),
    })
    .strict();
export const PollHashtagUpdateInputObjectSchema: z.ZodType<Prisma.PollHashtagUpdateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUpdateInput>;
export const PollHashtagUpdateInputObjectZodSchema = makeSchema();
