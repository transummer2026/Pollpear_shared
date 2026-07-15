import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  voteId: z.number().int()
}).strict();
export const VoteOptionUncheckedCreateWithoutOptionInputObjectSchema: z.ZodType<Prisma.VoteOptionUncheckedCreateWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUncheckedCreateWithoutOptionInput>;
export const VoteOptionUncheckedCreateWithoutOptionInputObjectZodSchema = makeSchema();
