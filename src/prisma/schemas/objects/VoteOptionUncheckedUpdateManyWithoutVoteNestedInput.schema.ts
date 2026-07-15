import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionCreateWithoutVoteInputObjectSchema as VoteOptionCreateWithoutVoteInputObjectSchema } from './VoteOptionCreateWithoutVoteInput.schema';
import { VoteOptionUncheckedCreateWithoutVoteInputObjectSchema as VoteOptionUncheckedCreateWithoutVoteInputObjectSchema } from './VoteOptionUncheckedCreateWithoutVoteInput.schema';
import { VoteOptionCreateOrConnectWithoutVoteInputObjectSchema as VoteOptionCreateOrConnectWithoutVoteInputObjectSchema } from './VoteOptionCreateOrConnectWithoutVoteInput.schema';
import { VoteOptionUpsertWithWhereUniqueWithoutVoteInputObjectSchema as VoteOptionUpsertWithWhereUniqueWithoutVoteInputObjectSchema } from './VoteOptionUpsertWithWhereUniqueWithoutVoteInput.schema';
import { VoteOptionCreateManyVoteInputEnvelopeObjectSchema as VoteOptionCreateManyVoteInputEnvelopeObjectSchema } from './VoteOptionCreateManyVoteInputEnvelope.schema';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './VoteOptionWhereUniqueInput.schema';
import { VoteOptionUpdateWithWhereUniqueWithoutVoteInputObjectSchema as VoteOptionUpdateWithWhereUniqueWithoutVoteInputObjectSchema } from './VoteOptionUpdateWithWhereUniqueWithoutVoteInput.schema';
import { VoteOptionUpdateManyWithWhereWithoutVoteInputObjectSchema as VoteOptionUpdateManyWithWhereWithoutVoteInputObjectSchema } from './VoteOptionUpdateManyWithWhereWithoutVoteInput.schema';
import { VoteOptionScalarWhereInputObjectSchema as VoteOptionScalarWhereInputObjectSchema } from './VoteOptionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VoteOptionCreateWithoutVoteInputObjectSchema), z.lazy(() => VoteOptionCreateWithoutVoteInputObjectSchema).array(), z.lazy(() => VoteOptionUncheckedCreateWithoutVoteInputObjectSchema), z.lazy(() => VoteOptionUncheckedCreateWithoutVoteInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VoteOptionCreateOrConnectWithoutVoteInputObjectSchema), z.lazy(() => VoteOptionCreateOrConnectWithoutVoteInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VoteOptionUpsertWithWhereUniqueWithoutVoteInputObjectSchema), z.lazy(() => VoteOptionUpsertWithWhereUniqueWithoutVoteInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VoteOptionCreateManyVoteInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VoteOptionWhereUniqueInputObjectSchema), z.lazy(() => VoteOptionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VoteOptionWhereUniqueInputObjectSchema), z.lazy(() => VoteOptionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VoteOptionWhereUniqueInputObjectSchema), z.lazy(() => VoteOptionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VoteOptionWhereUniqueInputObjectSchema), z.lazy(() => VoteOptionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VoteOptionUpdateWithWhereUniqueWithoutVoteInputObjectSchema), z.lazy(() => VoteOptionUpdateWithWhereUniqueWithoutVoteInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VoteOptionUpdateManyWithWhereWithoutVoteInputObjectSchema), z.lazy(() => VoteOptionUpdateManyWithWhereWithoutVoteInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VoteOptionScalarWhereInputObjectSchema), z.lazy(() => VoteOptionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VoteOptionUncheckedUpdateManyWithoutVoteNestedInputObjectSchema: z.ZodType<Prisma.VoteOptionUncheckedUpdateManyWithoutVoteNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUncheckedUpdateManyWithoutVoteNestedInput>;
export const VoteOptionUncheckedUpdateManyWithoutVoteNestedInputObjectZodSchema = makeSchema();
