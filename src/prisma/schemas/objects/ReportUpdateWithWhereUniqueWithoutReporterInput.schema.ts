import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutReporterInputObjectSchema as ReportUpdateWithoutReporterInputObjectSchema } from './ReportUpdateWithoutReporterInput.schema';
import { ReportUncheckedUpdateWithoutReporterInputObjectSchema as ReportUncheckedUpdateWithoutReporterInputObjectSchema } from './ReportUncheckedUpdateWithoutReporterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutReporterInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutReporterInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutReporterInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutReporterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutReporterInput>;
export const ReportUpdateWithWhereUniqueWithoutReporterInputObjectZodSchema = makeSchema();
