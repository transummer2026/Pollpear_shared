import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './VoteOptionWhereUniqueInput.schema';
import { VoteOptionCreateWithoutVoteInputObjectSchema as VoteOptionCreateWithoutVoteInputObjectSchema } from './VoteOptionCreateWithoutVoteInput.schema';
import { VoteOptionUncheckedCreateWithoutVoteInputObjectSchema as VoteOptionUncheckedCreateWithoutVoteInputObjectSchema } from './VoteOptionUncheckedCreateWithoutVoteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteOptionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VoteOptionCreateWithoutVoteInputObjectSchema), z.lazy(() => VoteOptionUncheckedCreateWithoutVoteInputObjectSchema)])
}).strict();
export const VoteOptionCreateOrConnectWithoutVoteInputObjectSchema: z.ZodType<Prisma.VoteOptionCreateOrConnectWithoutVoteInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionCreateOrConnectWithoutVoteInput>;
export const VoteOptionCreateOrConnectWithoutVoteInputObjectZodSchema = makeSchema();
