import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './VoteOptionWhereUniqueInput.schema';
import { VoteOptionUpdateWithoutVoteInputObjectSchema as VoteOptionUpdateWithoutVoteInputObjectSchema } from './VoteOptionUpdateWithoutVoteInput.schema';
import { VoteOptionUncheckedUpdateWithoutVoteInputObjectSchema as VoteOptionUncheckedUpdateWithoutVoteInputObjectSchema } from './VoteOptionUncheckedUpdateWithoutVoteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteOptionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VoteOptionUpdateWithoutVoteInputObjectSchema), z.lazy(() => VoteOptionUncheckedUpdateWithoutVoteInputObjectSchema)])
}).strict();
export const VoteOptionUpdateWithWhereUniqueWithoutVoteInputObjectSchema: z.ZodType<Prisma.VoteOptionUpdateWithWhereUniqueWithoutVoteInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUpdateWithWhereUniqueWithoutVoteInput>;
export const VoteOptionUpdateWithWhereUniqueWithoutVoteInputObjectZodSchema = makeSchema();
