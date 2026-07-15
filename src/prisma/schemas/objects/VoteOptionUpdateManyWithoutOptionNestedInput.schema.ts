import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionCreateWithoutOptionInputObjectSchema as VoteOptionCreateWithoutOptionInputObjectSchema } from './VoteOptionCreateWithoutOptionInput.schema';
import { VoteOptionUncheckedCreateWithoutOptionInputObjectSchema as VoteOptionUncheckedCreateWithoutOptionInputObjectSchema } from './VoteOptionUncheckedCreateWithoutOptionInput.schema';
import { VoteOptionCreateOrConnectWithoutOptionInputObjectSchema as VoteOptionCreateOrConnectWithoutOptionInputObjectSchema } from './VoteOptionCreateOrConnectWithoutOptionInput.schema';
import { VoteOptionUpsertWithWhereUniqueWithoutOptionInputObjectSchema as VoteOptionUpsertWithWhereUniqueWithoutOptionInputObjectSchema } from './VoteOptionUpsertWithWhereUniqueWithoutOptionInput.schema';
import { VoteOptionCreateManyOptionInputEnvelopeObjectSchema as VoteOptionCreateManyOptionInputEnvelopeObjectSchema } from './VoteOptionCreateManyOptionInputEnvelope.schema';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './VoteOptionWhereUniqueInput.schema';
import { VoteOptionUpdateWithWhereUniqueWithoutOptionInputObjectSchema as VoteOptionUpdateWithWhereUniqueWithoutOptionInputObjectSchema } from './VoteOptionUpdateWithWhereUniqueWithoutOptionInput.schema';
import { VoteOptionUpdateManyWithWhereWithoutOptionInputObjectSchema as VoteOptionUpdateManyWithWhereWithoutOptionInputObjectSchema } from './VoteOptionUpdateManyWithWhereWithoutOptionInput.schema';
import { VoteOptionScalarWhereInputObjectSchema as VoteOptionScalarWhereInputObjectSchema } from './VoteOptionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VoteOptionCreateWithoutOptionInputObjectSchema), z.lazy(() => VoteOptionCreateWithoutOptionInputObjectSchema).array(), z.lazy(() => VoteOptionUncheckedCreateWithoutOptionInputObjectSchema), z.lazy(() => VoteOptionUncheckedCreateWithoutOptionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VoteOptionCreateOrConnectWithoutOptionInputObjectSchema), z.lazy(() => VoteOptionCreateOrConnectWithoutOptionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VoteOptionUpsertWithWhereUniqueWithoutOptionInputObjectSchema), z.lazy(() => VoteOptionUpsertWithWhereUniqueWithoutOptionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VoteOptionCreateManyOptionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VoteOptionWhereUniqueInputObjectSchema), z.lazy(() => VoteOptionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VoteOptionWhereUniqueInputObjectSchema), z.lazy(() => VoteOptionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VoteOptionWhereUniqueInputObjectSchema), z.lazy(() => VoteOptionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VoteOptionWhereUniqueInputObjectSchema), z.lazy(() => VoteOptionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VoteOptionUpdateWithWhereUniqueWithoutOptionInputObjectSchema), z.lazy(() => VoteOptionUpdateWithWhereUniqueWithoutOptionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VoteOptionUpdateManyWithWhereWithoutOptionInputObjectSchema), z.lazy(() => VoteOptionUpdateManyWithWhereWithoutOptionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VoteOptionScalarWhereInputObjectSchema), z.lazy(() => VoteOptionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VoteOptionUpdateManyWithoutOptionNestedInputObjectSchema: z.ZodType<Prisma.VoteOptionUpdateManyWithoutOptionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUpdateManyWithoutOptionNestedInput>;
export const VoteOptionUpdateManyWithoutOptionNestedInputObjectZodSchema = makeSchema();
