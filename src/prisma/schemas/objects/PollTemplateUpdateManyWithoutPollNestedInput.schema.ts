import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateCreateWithoutPollInputObjectSchema as PollTemplateCreateWithoutPollInputObjectSchema } from './PollTemplateCreateWithoutPollInput.schema';
import { PollTemplateUncheckedCreateWithoutPollInputObjectSchema as PollTemplateUncheckedCreateWithoutPollInputObjectSchema } from './PollTemplateUncheckedCreateWithoutPollInput.schema';
import { PollTemplateCreateOrConnectWithoutPollInputObjectSchema as PollTemplateCreateOrConnectWithoutPollInputObjectSchema } from './PollTemplateCreateOrConnectWithoutPollInput.schema';
import { PollTemplateUpsertWithWhereUniqueWithoutPollInputObjectSchema as PollTemplateUpsertWithWhereUniqueWithoutPollInputObjectSchema } from './PollTemplateUpsertWithWhereUniqueWithoutPollInput.schema';
import { PollTemplateCreateManyPollInputEnvelopeObjectSchema as PollTemplateCreateManyPollInputEnvelopeObjectSchema } from './PollTemplateCreateManyPollInputEnvelope.schema';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './PollTemplateWhereUniqueInput.schema';
import { PollTemplateUpdateWithWhereUniqueWithoutPollInputObjectSchema as PollTemplateUpdateWithWhereUniqueWithoutPollInputObjectSchema } from './PollTemplateUpdateWithWhereUniqueWithoutPollInput.schema';
import { PollTemplateUpdateManyWithWhereWithoutPollInputObjectSchema as PollTemplateUpdateManyWithWhereWithoutPollInputObjectSchema } from './PollTemplateUpdateManyWithWhereWithoutPollInput.schema';
import { PollTemplateScalarWhereInputObjectSchema as PollTemplateScalarWhereInputObjectSchema } from './PollTemplateScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollTemplateCreateWithoutPollInputObjectSchema), z.lazy(() => PollTemplateCreateWithoutPollInputObjectSchema).array(), z.lazy(() => PollTemplateUncheckedCreateWithoutPollInputObjectSchema), z.lazy(() => PollTemplateUncheckedCreateWithoutPollInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollTemplateCreateOrConnectWithoutPollInputObjectSchema), z.lazy(() => PollTemplateCreateOrConnectWithoutPollInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PollTemplateUpsertWithWhereUniqueWithoutPollInputObjectSchema), z.lazy(() => PollTemplateUpsertWithWhereUniqueWithoutPollInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollTemplateCreateManyPollInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PollTemplateWhereUniqueInputObjectSchema), z.lazy(() => PollTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PollTemplateWhereUniqueInputObjectSchema), z.lazy(() => PollTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PollTemplateWhereUniqueInputObjectSchema), z.lazy(() => PollTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PollTemplateWhereUniqueInputObjectSchema), z.lazy(() => PollTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PollTemplateUpdateWithWhereUniqueWithoutPollInputObjectSchema), z.lazy(() => PollTemplateUpdateWithWhereUniqueWithoutPollInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PollTemplateUpdateManyWithWhereWithoutPollInputObjectSchema), z.lazy(() => PollTemplateUpdateManyWithWhereWithoutPollInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PollTemplateScalarWhereInputObjectSchema), z.lazy(() => PollTemplateScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PollTemplateUpdateManyWithoutPollNestedInputObjectSchema: z.ZodType<Prisma.PollTemplateUpdateManyWithoutPollNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUpdateManyWithoutPollNestedInput>;
export const PollTemplateUpdateManyWithoutPollNestedInputObjectZodSchema = makeSchema();
