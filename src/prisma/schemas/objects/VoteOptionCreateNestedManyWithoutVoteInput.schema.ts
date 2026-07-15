import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionCreateWithoutVoteInputObjectSchema as VoteOptionCreateWithoutVoteInputObjectSchema } from './VoteOptionCreateWithoutVoteInput.schema';
import { VoteOptionUncheckedCreateWithoutVoteInputObjectSchema as VoteOptionUncheckedCreateWithoutVoteInputObjectSchema } from './VoteOptionUncheckedCreateWithoutVoteInput.schema';
import { VoteOptionCreateOrConnectWithoutVoteInputObjectSchema as VoteOptionCreateOrConnectWithoutVoteInputObjectSchema } from './VoteOptionCreateOrConnectWithoutVoteInput.schema';
import { VoteOptionCreateManyVoteInputEnvelopeObjectSchema as VoteOptionCreateManyVoteInputEnvelopeObjectSchema } from './VoteOptionCreateManyVoteInputEnvelope.schema';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './VoteOptionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VoteOptionCreateWithoutVoteInputObjectSchema), z.lazy(() => VoteOptionCreateWithoutVoteInputObjectSchema).array(), z.lazy(() => VoteOptionUncheckedCreateWithoutVoteInputObjectSchema), z.lazy(() => VoteOptionUncheckedCreateWithoutVoteInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VoteOptionCreateOrConnectWithoutVoteInputObjectSchema), z.lazy(() => VoteOptionCreateOrConnectWithoutVoteInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VoteOptionCreateManyVoteInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VoteOptionWhereUniqueInputObjectSchema), z.lazy(() => VoteOptionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VoteOptionCreateNestedManyWithoutVoteInputObjectSchema: z.ZodType<Prisma.VoteOptionCreateNestedManyWithoutVoteInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionCreateNestedManyWithoutVoteInput>;
export const VoteOptionCreateNestedManyWithoutVoteInputObjectZodSchema = makeSchema();
