import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyCreateWithoutOptionInputObjectSchema as PollDependencyCreateWithoutOptionInputObjectSchema } from './PollDependencyCreateWithoutOptionInput.schema';
import { PollDependencyUncheckedCreateWithoutOptionInputObjectSchema as PollDependencyUncheckedCreateWithoutOptionInputObjectSchema } from './PollDependencyUncheckedCreateWithoutOptionInput.schema';
import { PollDependencyCreateOrConnectWithoutOptionInputObjectSchema as PollDependencyCreateOrConnectWithoutOptionInputObjectSchema } from './PollDependencyCreateOrConnectWithoutOptionInput.schema';
import { PollDependencyUpsertWithWhereUniqueWithoutOptionInputObjectSchema as PollDependencyUpsertWithWhereUniqueWithoutOptionInputObjectSchema } from './PollDependencyUpsertWithWhereUniqueWithoutOptionInput.schema';
import { PollDependencyCreateManyOptionInputEnvelopeObjectSchema as PollDependencyCreateManyOptionInputEnvelopeObjectSchema } from './PollDependencyCreateManyOptionInputEnvelope.schema';
import { PollDependencyWhereUniqueInputObjectSchema as PollDependencyWhereUniqueInputObjectSchema } from './PollDependencyWhereUniqueInput.schema';
import { PollDependencyUpdateWithWhereUniqueWithoutOptionInputObjectSchema as PollDependencyUpdateWithWhereUniqueWithoutOptionInputObjectSchema } from './PollDependencyUpdateWithWhereUniqueWithoutOptionInput.schema';
import { PollDependencyUpdateManyWithWhereWithoutOptionInputObjectSchema as PollDependencyUpdateManyWithWhereWithoutOptionInputObjectSchema } from './PollDependencyUpdateManyWithWhereWithoutOptionInput.schema';
import { PollDependencyScalarWhereInputObjectSchema as PollDependencyScalarWhereInputObjectSchema } from './PollDependencyScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollDependencyCreateWithoutOptionInputObjectSchema), z.lazy(() => PollDependencyCreateWithoutOptionInputObjectSchema).array(), z.lazy(() => PollDependencyUncheckedCreateWithoutOptionInputObjectSchema), z.lazy(() => PollDependencyUncheckedCreateWithoutOptionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollDependencyCreateOrConnectWithoutOptionInputObjectSchema), z.lazy(() => PollDependencyCreateOrConnectWithoutOptionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PollDependencyUpsertWithWhereUniqueWithoutOptionInputObjectSchema), z.lazy(() => PollDependencyUpsertWithWhereUniqueWithoutOptionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollDependencyCreateManyOptionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PollDependencyWhereUniqueInputObjectSchema), z.lazy(() => PollDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PollDependencyWhereUniqueInputObjectSchema), z.lazy(() => PollDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PollDependencyWhereUniqueInputObjectSchema), z.lazy(() => PollDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PollDependencyWhereUniqueInputObjectSchema), z.lazy(() => PollDependencyWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PollDependencyUpdateWithWhereUniqueWithoutOptionInputObjectSchema), z.lazy(() => PollDependencyUpdateWithWhereUniqueWithoutOptionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PollDependencyUpdateManyWithWhereWithoutOptionInputObjectSchema), z.lazy(() => PollDependencyUpdateManyWithWhereWithoutOptionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PollDependencyScalarWhereInputObjectSchema), z.lazy(() => PollDependencyScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PollDependencyUncheckedUpdateManyWithoutOptionNestedInputObjectSchema: z.ZodType<Prisma.PollDependencyUncheckedUpdateManyWithoutOptionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUncheckedUpdateManyWithoutOptionNestedInput>;
export const PollDependencyUncheckedUpdateManyWithoutOptionNestedInputObjectZodSchema = makeSchema();
