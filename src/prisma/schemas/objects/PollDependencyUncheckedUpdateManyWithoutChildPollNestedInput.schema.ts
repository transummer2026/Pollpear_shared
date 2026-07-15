import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyCreateWithoutChildPollInputObjectSchema as PollDependencyCreateWithoutChildPollInputObjectSchema } from './PollDependencyCreateWithoutChildPollInput.schema';
import { PollDependencyUncheckedCreateWithoutChildPollInputObjectSchema as PollDependencyUncheckedCreateWithoutChildPollInputObjectSchema } from './PollDependencyUncheckedCreateWithoutChildPollInput.schema';
import { PollDependencyCreateOrConnectWithoutChildPollInputObjectSchema as PollDependencyCreateOrConnectWithoutChildPollInputObjectSchema } from './PollDependencyCreateOrConnectWithoutChildPollInput.schema';
import { PollDependencyUpsertWithWhereUniqueWithoutChildPollInputObjectSchema as PollDependencyUpsertWithWhereUniqueWithoutChildPollInputObjectSchema } from './PollDependencyUpsertWithWhereUniqueWithoutChildPollInput.schema';
import { PollDependencyCreateManyChildPollInputEnvelopeObjectSchema as PollDependencyCreateManyChildPollInputEnvelopeObjectSchema } from './PollDependencyCreateManyChildPollInputEnvelope.schema';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './PollDependencyWhereUniqueInput.schema';
import { PollDependencyUpdateWithWhereUniqueWithoutChildPollInputObjectSchema as PollDependencyUpdateWithWhereUniqueWithoutChildPollInputObjectSchema } from './PollDependencyUpdateWithWhereUniqueWithoutChildPollInput.schema';
import { PollDependencyUpdateManyWithWhereWithoutChildPollInputObjectSchema as PollDependencyUpdateManyWithWhereWithoutChildPollInputObjectSchema } from './PollDependencyUpdateManyWithWhereWithoutChildPollInput.schema';
import { PollDependencyScalarWhereInputObjectSchema as PollDependencyScalarWhereInputObjectSchema } from './PollDependencyScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollDependencyCreateWithoutChildPollInputObjectSchema), z.lazy(() => PollDependencyCreateWithoutChildPollInputObjectSchema).array(), z.lazy(() => PollDependencyUncheckedCreateWithoutChildPollInputObjectSchema), z.lazy(() => PollDependencyUncheckedCreateWithoutChildPollInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollDependencyCreateOrConnectWithoutChildPollInputObjectSchema), z.lazy(() => PollDependencyCreateOrConnectWithoutChildPollInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PollDependencyUpsertWithWhereUniqueWithoutChildPollInputObjectSchema), z.lazy(() => PollDependencyUpsertWithWhereUniqueWithoutChildPollInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollDependencyCreateManyChildPollInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PollDependencyWhereUniqueInputObjectSchema), z.lazy(() => PollDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PollDependencyWhereUniqueInputObjectSchema), z.lazy(() => PollDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PollDependencyWhereUniqueInputObjectSchema), z.lazy(() => PollDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PollDependencyWhereUniqueInputObjectSchema), z.lazy(() => PollDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PollDependencyUpdateWithWhereUniqueWithoutChildPollInputObjectSchema), z.lazy(() => PollDependencyUpdateWithWhereUniqueWithoutChildPollInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PollDependencyUpdateManyWithWhereWithoutChildPollInputObjectSchema), z.lazy(() => PollDependencyUpdateManyWithWhereWithoutChildPollInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PollDependencyScalarWhereInputObjectSchema), z.lazy(() => PollDependencyScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PollDependencyUncheckedUpdateManyWithoutChildPollNestedInputObjectSchema: z.ZodType<Prisma.PollDependencyUncheckedUpdateManyWithoutChildPollNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUncheckedUpdateManyWithoutChildPollNestedInput>;
export const PollDependencyUncheckedUpdateManyWithoutChildPollNestedInputObjectZodSchema = makeSchema();
