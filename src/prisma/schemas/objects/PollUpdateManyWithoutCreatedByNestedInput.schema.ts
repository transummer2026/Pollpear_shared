import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutCreatedByInputObjectSchema as PollCreateWithoutCreatedByInputObjectSchema } from './PollCreateWithoutCreatedByInput.schema';
import { PollUncheckedCreateWithoutCreatedByInputObjectSchema as PollUncheckedCreateWithoutCreatedByInputObjectSchema } from './PollUncheckedCreateWithoutCreatedByInput.schema';
import { PollCreateOrConnectWithoutCreatedByInputObjectSchema as PollCreateOrConnectWithoutCreatedByInputObjectSchema } from './PollCreateOrConnectWithoutCreatedByInput.schema';
import { PollUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema as PollUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './PollUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { PollCreateManyCreatedByInputEnvelopeObjectSchema as PollCreateManyCreatedByInputEnvelopeObjectSchema } from './PollCreateManyCreatedByInputEnvelope.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema as PollUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './PollUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { PollUpdateManyWithWhereWithoutCreatedByInputObjectSchema as PollUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './PollUpdateManyWithWhereWithoutCreatedByInput.schema';
import { PollScalarWhereInputObjectSchema as PollScalarWhereInputObjectSchema } from './PollScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PollCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => PollUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => PollCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PollUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => PollUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PollWhereUniqueInputObjectSchema), z.lazy(() => PollWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PollWhereUniqueInputObjectSchema), z.lazy(() => PollWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PollWhereUniqueInputObjectSchema), z.lazy(() => PollWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PollWhereUniqueInputObjectSchema), z.lazy(() => PollWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PollUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => PollUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PollUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => PollUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PollScalarWhereInputObjectSchema), z.lazy(() => PollScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PollUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.PollUpdateManyWithoutCreatedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateManyWithoutCreatedByNestedInput>;
export const PollUpdateManyWithoutCreatedByNestedInputObjectZodSchema = makeSchema();
