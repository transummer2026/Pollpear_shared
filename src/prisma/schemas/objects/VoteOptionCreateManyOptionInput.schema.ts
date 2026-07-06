import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";

const makeSchema = () =>
  z
    .object({
      voteId: z.number().int(),
    })
    .strict();
export const VoteOptionCreateManyOptionInputObjectSchema: z.ZodType<Prisma.VoteOptionCreateManyOptionInput> =
  makeSchema() as unknown as z.ZodType<Prisma.VoteOptionCreateManyOptionInput>;
export const VoteOptionCreateManyOptionInputObjectZodSchema = makeSchema();
