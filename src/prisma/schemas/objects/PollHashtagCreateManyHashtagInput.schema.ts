import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      pollId: z.number().int(),
    })
    .strict();
export const PollHashtagCreateManyHashtagInputObjectSchema: z.ZodType<Prisma.PollHashtagCreateManyHashtagInput> =
  makeSchema() as unknown as z.ZodType<Prisma.PollHashtagCreateManyHashtagInput>;
export const PollHashtagCreateManyHashtagInputObjectZodSchema = makeSchema();
