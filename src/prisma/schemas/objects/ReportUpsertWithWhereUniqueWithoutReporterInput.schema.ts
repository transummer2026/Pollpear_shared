import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutReporterInputObjectSchema as ReportUpdateWithoutReporterInputObjectSchema } from './ReportUpdateWithoutReporterInput.schema';
import { ReportUncheckedUpdateWithoutReporterInputObjectSchema as ReportUncheckedUpdateWithoutReporterInputObjectSchema } from './ReportUncheckedUpdateWithoutReporterInput.schema';
import { ReportCreateWithoutReporterInputObjectSchema as ReportCreateWithoutReporterInputObjectSchema } from './ReportCreateWithoutReporterInput.schema';
import { ReportUncheckedCreateWithoutReporterInputObjectSchema as ReportUncheckedCreateWithoutReporterInputObjectSchema } from './ReportUncheckedCreateWithoutReporterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutReporterInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutReporterInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutReporterInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutReporterInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutReporterInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutReporterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutReporterInput>;
export const ReportUpsertWithWhereUniqueWithoutReporterInputObjectZodSchema = makeSchema();
