import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  voteId: z.number().int(),
  optionId: z.number().int()
}).strict();
export const VoteOptionVoteIdOptionIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.VoteOptionVoteIdOptionIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionVoteIdOptionIdCompoundUniqueInput>;
export const VoteOptionVoteIdOptionIdCompoundUniqueInputObjectZodSchema = makeSchema();
