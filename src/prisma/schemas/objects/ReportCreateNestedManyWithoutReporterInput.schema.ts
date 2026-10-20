import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateWithoutReporterInputObjectSchema as ReportCreateWithoutReporterInputObjectSchema } from './ReportCreateWithoutReporterInput.schema';
import { ReportUncheckedCreateWithoutReporterInputObjectSchema as ReportUncheckedCreateWithoutReporterInputObjectSchema } from './ReportUncheckedCreateWithoutReporterInput.schema';
import { ReportCreateOrConnectWithoutReporterInputObjectSchema as ReportCreateOrConnectWithoutReporterInputObjectSchema } from './ReportCreateOrConnectWithoutReporterInput.schema';
import { ReportCreateManyReporterInputEnvelopeObjectSchema as ReportCreateManyReporterInputEnvelopeObjectSchema } from './ReportCreateManyReporterInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutReporterInputObjectSchema), z.lazy(() => ReportCreateWithoutReporterInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutReporterInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutReporterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutReporterInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutReporterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyReporterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCreateNestedManyWithoutReporterInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedManyWithoutReporterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateNestedManyWithoutReporterInput>;
export const ReportCreateNestedManyWithoutReporterInputObjectZodSchema = makeSchema();
