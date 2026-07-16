import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './VoteOptionWhereUniqueInput.schema';
import { VoteOptionUpdateWithoutVoteInputObjectSchema as VoteOptionUpdateWithoutVoteInputObjectSchema } from './VoteOptionUpdateWithoutVoteInput.schema';
import { VoteOptionUncheckedUpdateWithoutVoteInputObjectSchema as VoteOptionUncheckedUpdateWithoutVoteInputObjectSchema } from './VoteOptionUncheckedUpdateWithoutVoteInput.schema';
import { VoteOptionCreateWithoutVoteInputObjectSchema as VoteOptionCreateWithoutVoteInputObjectSchema } from './VoteOptionCreateWithoutVoteInput.schema';
import { VoteOptionUncheckedCreateWithoutVoteInputObjectSchema as VoteOptionUncheckedCreateWithoutVoteInputObjectSchema } from './VoteOptionUncheckedCreateWithoutVoteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteOptionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VoteOptionUpdateWithoutVoteInputObjectSchema), z.lazy(() => VoteOptionUncheckedUpdateWithoutVoteInputObjectSchema)]),
  create: z.union([z.lazy(() => VoteOptionCreateWithoutVoteInputObjectSchema), z.lazy(() => VoteOptionUncheckedCreateWithoutVoteInputObjectSchema)])
}).strict();
export const VoteOptionUpsertWithWhereUniqueWithoutVoteInputObjectSchema: z.ZodType<Prisma.VoteOptionUpsertWithWhereUniqueWithoutVoteInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUpsertWithWhereUniqueWithoutVoteInput>;
export const VoteOptionUpsertWithWhereUniqueWithoutVoteInputObjectZodSchema = makeSchema();
