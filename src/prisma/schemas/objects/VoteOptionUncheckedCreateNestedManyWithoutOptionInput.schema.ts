import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionCreateWithoutOptionInputObjectSchema as VoteOptionCreateWithoutOptionInputObjectSchema } from './VoteOptionCreateWithoutOptionInput.schema';
import { VoteOptionUncheckedCreateWithoutOptionInputObjectSchema as VoteOptionUncheckedCreateWithoutOptionInputObjectSchema } from './VoteOptionUncheckedCreateWithoutOptionInput.schema';
import { VoteOptionCreateOrConnectWithoutOptionInputObjectSchema as VoteOptionCreateOrConnectWithoutOptionInputObjectSchema } from './VoteOptionCreateOrConnectWithoutOptionInput.schema';
import { VoteOptionCreateManyOptionInputEnvelopeObjectSchema as VoteOptionCreateManyOptionInputEnvelopeObjectSchema } from './VoteOptionCreateManyOptionInputEnvelope.schema';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './VoteOptionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VoteOptionCreateWithoutOptionInputObjectSchema), z.lazy(() => VoteOptionCreateWithoutOptionInputObjectSchema).array(), z.lazy(() => VoteOptionUncheckedCreateWithoutOptionInputObjectSchema), z.lazy(() => VoteOptionUncheckedCreateWithoutOptionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VoteOptionCreateOrConnectWithoutOptionInputObjectSchema), z.lazy(() => VoteOptionCreateOrConnectWithoutOptionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VoteOptionCreateManyOptionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VoteOptionWhereUniqueInputObjectSchema), z.lazy(() => VoteOptionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema: z.ZodType<Prisma.VoteOptionUncheckedCreateNestedManyWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUncheckedCreateNestedManyWithoutOptionInput>;
export const VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectZodSchema = makeSchema();
