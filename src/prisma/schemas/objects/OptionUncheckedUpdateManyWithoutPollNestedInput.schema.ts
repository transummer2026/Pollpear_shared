import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionCreateWithoutPollInputObjectSchema as OptionCreateWithoutPollInputObjectSchema } from './OptionCreateWithoutPollInput.schema';
import { OptionUncheckedCreateWithoutPollInputObjectSchema as OptionUncheckedCreateWithoutPollInputObjectSchema } from './OptionUncheckedCreateWithoutPollInput.schema';
import { OptionCreateOrConnectWithoutPollInputObjectSchema as OptionCreateOrConnectWithoutPollInputObjectSchema } from './OptionCreateOrConnectWithoutPollInput.schema';
import { OptionUpsertWithWhereUniqueWithoutPollInputObjectSchema as OptionUpsertWithWhereUniqueWithoutPollInputObjectSchema } from './OptionUpsertWithWhereUniqueWithoutPollInput.schema';
import { OptionCreateManyPollInputEnvelopeObjectSchema as OptionCreateManyPollInputEnvelopeObjectSchema } from './OptionCreateManyPollInputEnvelope.schema';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema';
import { OptionUpdateWithWhereUniqueWithoutPollInputObjectSchema as OptionUpdateWithWhereUniqueWithoutPollInputObjectSchema } from './OptionUpdateWithWhereUniqueWithoutPollInput.schema';
import { OptionUpdateManyWithWhereWithoutPollInputObjectSchema as OptionUpdateManyWithWhereWithoutPollInputObjectSchema } from './OptionUpdateManyWithWhereWithoutPollInput.schema';
import { OptionScalarWhereInputObjectSchema as OptionScalarWhereInputObjectSchema } from './OptionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OptionCreateWithoutPollInputObjectSchema), z.lazy(() => OptionCreateWithoutPollInputObjectSchema).array(), z.lazy(() => OptionUncheckedCreateWithoutPollInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutPollInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OptionCreateOrConnectWithoutPollInputObjectSchema), z.lazy(() => OptionCreateOrConnectWithoutPollInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OptionUpsertWithWhereUniqueWithoutPollInputObjectSchema), z.lazy(() => OptionUpsertWithWhereUniqueWithoutPollInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OptionCreateManyPollInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OptionWhereUniqueInputObjectSchema), z.lazy(() => OptionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OptionWhereUniqueInputObjectSchema), z.lazy(() => OptionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OptionWhereUniqueInputObjectSchema), z.lazy(() => OptionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OptionWhereUniqueInputObjectSchema), z.lazy(() => OptionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OptionUpdateWithWhereUniqueWithoutPollInputObjectSchema), z.lazy(() => OptionUpdateWithWhereUniqueWithoutPollInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OptionUpdateManyWithWhereWithoutPollInputObjectSchema), z.lazy(() => OptionUpdateManyWithWhereWithoutPollInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OptionScalarWhereInputObjectSchema), z.lazy(() => OptionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OptionUncheckedUpdateManyWithoutPollNestedInputObjectSchema: z.ZodType<Prisma.OptionUncheckedUpdateManyWithoutPollNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUncheckedUpdateManyWithoutPollNestedInput>;
export const OptionUncheckedUpdateManyWithoutPollNestedInputObjectZodSchema = makeSchema();
