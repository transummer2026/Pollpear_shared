import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  optionId: z.number().int()
}).strict();
export const VoteOptionCreateManyVoteInputObjectSchema: z.ZodType<Prisma.VoteOptionCreateManyVoteInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionCreateManyVoteInput>;
export const VoteOptionCreateManyVoteInputObjectZodSchema = makeSchema();
