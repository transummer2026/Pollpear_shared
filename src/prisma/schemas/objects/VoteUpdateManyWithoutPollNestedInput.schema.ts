import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteCreateWithoutPollInputObjectSchema as VoteCreateWithoutPollInputObjectSchema } from './VoteCreateWithoutPollInput.schema';
import { VoteUncheckedCreateWithoutPollInputObjectSchema as VoteUncheckedCreateWithoutPollInputObjectSchema } from './VoteUncheckedCreateWithoutPollInput.schema';
import { VoteCreateOrConnectWithoutPollInputObjectSchema as VoteCreateOrConnectWithoutPollInputObjectSchema } from './VoteCreateOrConnectWithoutPollInput.schema';
import { VoteUpsertWithWhereUniqueWithoutPollInputObjectSchema as VoteUpsertWithWhereUniqueWithoutPollInputObjectSchema } from './VoteUpsertWithWhereUniqueWithoutPollInput.schema';
import { VoteCreateManyPollInputEnvelopeObjectSchema as VoteCreateManyPollInputEnvelopeObjectSchema } from './VoteCreateManyPollInputEnvelope.schema';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithWhereUniqueWithoutPollInputObjectSchema as VoteUpdateWithWhereUniqueWithoutPollInputObjectSchema } from './VoteUpdateWithWhereUniqueWithoutPollInput.schema';
import { VoteUpdateManyWithWhereWithoutPollInputObjectSchema as VoteUpdateManyWithWhereWithoutPollInputObjectSchema } from './VoteUpdateManyWithWhereWithoutPollInput.schema';
import { VoteScalarWhereInputObjectSchema as VoteScalarWhereInputObjectSchema } from './VoteScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VoteCreateWithoutPollInputObjectSchema), z.lazy(() => VoteCreateWithoutPollInputObjectSchema).array(), z.lazy(() => VoteUncheckedCreateWithoutPollInputObjectSchema), z.lazy(() => VoteUncheckedCreateWithoutPollInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VoteCreateOrConnectWithoutPollInputObjectSchema), z.lazy(() => VoteCreateOrConnectWithoutPollInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VoteUpsertWithWhereUniqueWithoutPollInputObjectSchema), z.lazy(() => VoteUpsertWithWhereUniqueWithoutPollInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VoteCreateManyPollInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema), z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema), z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema), z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema), z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VoteUpdateWithWhereUniqueWithoutPollInputObjectSchema), z.lazy(() => VoteUpdateWithWhereUniqueWithoutPollInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VoteUpdateManyWithWhereWithoutPollInputObjectSchema), z.lazy(() => VoteUpdateManyWithWhereWithoutPollInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VoteScalarWhereInputObjectSchema), z.lazy(() => VoteScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VoteUpdateManyWithoutPollNestedInputObjectSchema: z.ZodType<Prisma.VoteUpdateManyWithoutPollNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUpdateManyWithoutPollNestedInput>;
export const VoteUpdateManyWithoutPollNestedInputObjectZodSchema = makeSchema();
