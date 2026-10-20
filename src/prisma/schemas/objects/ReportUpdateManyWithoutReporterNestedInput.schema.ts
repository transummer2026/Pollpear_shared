import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateWithoutReporterInputObjectSchema as ReportCreateWithoutReporterInputObjectSchema } from './ReportCreateWithoutReporterInput.schema';
import { ReportUncheckedCreateWithoutReporterInputObjectSchema as ReportUncheckedCreateWithoutReporterInputObjectSchema } from './ReportUncheckedCreateWithoutReporterInput.schema';
import { ReportCreateOrConnectWithoutReporterInputObjectSchema as ReportCreateOrConnectWithoutReporterInputObjectSchema } from './ReportCreateOrConnectWithoutReporterInput.schema';
import { ReportUpsertWithWhereUniqueWithoutReporterInputObjectSchema as ReportUpsertWithWhereUniqueWithoutReporterInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutReporterInput.schema';
import { ReportCreateManyReporterInputEnvelopeObjectSchema as ReportCreateManyReporterInputEnvelopeObjectSchema } from './ReportCreateManyReporterInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutReporterInputObjectSchema as ReportUpdateWithWhereUniqueWithoutReporterInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutReporterInput.schema';
import { ReportUpdateManyWithWhereWithoutReporterInputObjectSchema as ReportUpdateManyWithWhereWithoutReporterInputObjectSchema } from './ReportUpdateManyWithWhereWithoutReporterInput.schema';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutReporterInputObjectSchema), z.lazy(() => ReportCreateWithoutReporterInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutReporterInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutReporterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutReporterInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutReporterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutReporterInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutReporterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyReporterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutReporterInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutReporterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutReporterInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutReporterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUpdateManyWithoutReporterNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithoutReporterNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithoutReporterNestedInput>;
export const ReportUpdateManyWithoutReporterNestedInputObjectZodSchema = makeSchema();
