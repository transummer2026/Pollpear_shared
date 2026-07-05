import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      voteId: z.number().int(),
      optionId: z.number().int(),
    })
    .strict();
export const VoteOptionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.VoteOptionUncheckedCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUncheckedCreateInput>;
export const VoteOptionUncheckedCreateInputObjectZodSchema = makeSchema();
