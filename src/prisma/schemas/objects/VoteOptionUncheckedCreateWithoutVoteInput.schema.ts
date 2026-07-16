import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  optionId: z.number().int()
}).strict();
export const VoteOptionUncheckedCreateWithoutVoteInputObjectSchema: z.ZodType<Prisma.VoteOptionUncheckedCreateWithoutVoteInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUncheckedCreateWithoutVoteInput>;
export const VoteOptionUncheckedCreateWithoutVoteInputObjectZodSchema = makeSchema();
