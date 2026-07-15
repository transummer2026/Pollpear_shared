import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateCreateWithoutUserInputObjectSchema as PollTemplateCreateWithoutUserInputObjectSchema } from './PollTemplateCreateWithoutUserInput.schema';
import { PollTemplateUncheckedCreateWithoutUserInputObjectSchema as PollTemplateUncheckedCreateWithoutUserInputObjectSchema } from './PollTemplateUncheckedCreateWithoutUserInput.schema';
import { PollTemplateCreateOrConnectWithoutUserInputObjectSchema as PollTemplateCreateOrConnectWithoutUserInputObjectSchema } from './PollTemplateCreateOrConnectWithoutUserInput.schema';
import { PollTemplateUpsertWithWhereUniqueWithoutUserInputObjectSchema as PollTemplateUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PollTemplateUpsertWithWhereUniqueWithoutUserInput.schema';
import { PollTemplateCreateManyUserInputEnvelopeObjectSchema as PollTemplateCreateManyUserInputEnvelopeObjectSchema } from './PollTemplateCreateManyUserInputEnvelope.schema';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './PollTemplateWhereUniqueInput.schema';
import { PollTemplateUpdateWithWhereUniqueWithoutUserInputObjectSchema as PollTemplateUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PollTemplateUpdateWithWhereUniqueWithoutUserInput.schema';
import { PollTemplateUpdateManyWithWhereWithoutUserInputObjectSchema as PollTemplateUpdateManyWithWhereWithoutUserInputObjectSchema } from './PollTemplateUpdateManyWithWhereWithoutUserInput.schema';
import { PollTemplateScalarWhereInputObjectSchema as PollTemplateScalarWhereInputObjectSchema } from './PollTemplateScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollTemplateCreateWithoutUserInputObjectSchema), z.lazy(() => PollTemplateCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PollTemplateUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PollTemplateUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollTemplateCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PollTemplateCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PollTemplateUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => PollTemplateUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollTemplateCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PollTemplateWhereUniqueInputObjectSchema), z.lazy(() => PollTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PollTemplateWhereUniqueInputObjectSchema), z.lazy(() => PollTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PollTemplateWhereUniqueInputObjectSchema), z.lazy(() => PollTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PollTemplateWhereUniqueInputObjectSchema), z.lazy(() => PollTemplateWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PollTemplateUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => PollTemplateUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PollTemplateUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => PollTemplateUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PollTemplateScalarWhereInputObjectSchema), z.lazy(() => PollTemplateScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PollTemplateUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.PollTemplateUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUncheckedUpdateManyWithoutUserNestedInput>;
export const PollTemplateUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
