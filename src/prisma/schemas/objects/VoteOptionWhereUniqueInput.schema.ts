import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { VoteOptionVoteIdOptionIdCompoundUniqueInputObjectSchema as VoteOptionVoteIdOptionIdCompoundUniqueInputObjectSchema } from "./VoteOptionVoteIdOptionIdCompoundUniqueInput.schema";

const makeSchema = () =>
  z
    .object({
      voteId_optionId: z
        .lazy(() => VoteOptionVoteIdOptionIdCompoundUniqueInputObjectSchema)
        .optional(),
    })
    .strict();
export const VoteOptionWhereUniqueInputObjectSchema: z.ZodType<Prisma.VoteOptionWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.VoteOptionWhereUniqueInput>;
export const VoteOptionWhereUniqueInputObjectZodSchema = makeSchema();
