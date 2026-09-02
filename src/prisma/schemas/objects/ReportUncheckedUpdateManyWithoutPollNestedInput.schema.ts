import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateWithoutPollInputObjectSchema as ReportCreateWithoutPollInputObjectSchema } from './ReportCreateWithoutPollInput.schema';
import { ReportUncheckedCreateWithoutPollInputObjectSchema as ReportUncheckedCreateWithoutPollInputObjectSchema } from './ReportUncheckedCreateWithoutPollInput.schema';
import { ReportCreateOrConnectWithoutPollInputObjectSchema as ReportCreateOrConnectWithoutPollInputObjectSchema } from './ReportCreateOrConnectWithoutPollInput.schema';
import { ReportUpsertWithWhereUniqueWithoutPollInputObjectSchema as ReportUpsertWithWhereUniqueWithoutPollInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutPollInput.schema';
import { ReportCreateManyPollInputEnvelopeObjectSchema as ReportCreateManyPollInputEnvelopeObjectSchema } from './ReportCreateManyPollInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutPollInputObjectSchema as ReportUpdateWithWhereUniqueWithoutPollInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutPollInput.schema';
import { ReportUpdateManyWithWhereWithoutPollInputObjectSchema as ReportUpdateManyWithWhereWithoutPollInputObjectSchema } from './ReportUpdateManyWithWhereWithoutPollInput.schema';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutPollInputObjectSchema), z.lazy(() => ReportCreateWithoutPollInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutPollInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutPollInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutPollInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutPollInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutPollInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutPollInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyPollInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutPollInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutPollInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutPollInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutPollInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedUpdateManyWithoutPollNestedInputObjectSchema: z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutPollNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedUpdateManyWithoutPollNestedInput>;
export const ReportUncheckedUpdateManyWithoutPollNestedInputObjectZodSchema = makeSchema();
