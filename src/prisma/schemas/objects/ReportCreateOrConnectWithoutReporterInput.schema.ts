import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutReporterInputObjectSchema as ReportCreateWithoutReporterInputObjectSchema } from './ReportCreateWithoutReporterInput.schema';
import { ReportUncheckedCreateWithoutReporterInputObjectSchema as ReportUncheckedCreateWithoutReporterInputObjectSchema } from './ReportUncheckedCreateWithoutReporterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutReporterInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutReporterInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutReporterInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutReporterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutReporterInput>;
export const ReportCreateOrConnectWithoutReporterInputObjectZodSchema = makeSchema();
