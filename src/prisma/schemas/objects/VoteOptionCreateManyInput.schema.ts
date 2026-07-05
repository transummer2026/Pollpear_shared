import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      voteId: z.number().int(),
      optionId: z.number().int(),
    })
    .strict();
export const VoteOptionCreateManyInputObjectSchema: z.ZodType<Prisma.VoteOptionCreateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.VoteOptionCreateManyInput>;
export const VoteOptionCreateManyInputObjectZodSchema = makeSchema();
