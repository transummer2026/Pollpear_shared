import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateWithoutReportedInputObjectSchema as ReportCreateWithoutReportedInputObjectSchema } from './ReportCreateWithoutReportedInput.schema';
import { ReportUncheckedCreateWithoutReportedInputObjectSchema as ReportUncheckedCreateWithoutReportedInputObjectSchema } from './ReportUncheckedCreateWithoutReportedInput.schema';
import { ReportCreateOrConnectWithoutReportedInputObjectSchema as ReportCreateOrConnectWithoutReportedInputObjectSchema } from './ReportCreateOrConnectWithoutReportedInput.schema';
import { ReportUpsertWithWhereUniqueWithoutReportedInputObjectSchema as ReportUpsertWithWhereUniqueWithoutReportedInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutReportedInput.schema';
import { ReportCreateManyReportedInputEnvelopeObjectSchema as ReportCreateManyReportedInputEnvelopeObjectSchema } from './ReportCreateManyReportedInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutReportedInputObjectSchema as ReportUpdateWithWhereUniqueWithoutReportedInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutReportedInput.schema';
import { ReportUpdateManyWithWhereWithoutReportedInputObjectSchema as ReportUpdateManyWithWhereWithoutReportedInputObjectSchema } from './ReportUpdateManyWithWhereWithoutReportedInput.schema';
import { ReportScalarWhereInputObjectSchema as ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutReportedInputObjectSchema), z.lazy(() => ReportCreateWithoutReportedInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutReportedInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutReportedInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutReportedInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutReportedInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutReportedInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutReportedInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyReportedInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutReportedInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutReportedInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutReportedInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutReportedInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUpdateManyWithoutReportedNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithoutReportedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithoutReportedNestedInput>;
export const ReportUpdateManyWithoutReportedNestedInputObjectZodSchema = makeSchema();
