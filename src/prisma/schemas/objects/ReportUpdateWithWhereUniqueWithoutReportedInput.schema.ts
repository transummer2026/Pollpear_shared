import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutReportedInputObjectSchema as ReportUpdateWithoutReportedInputObjectSchema } from './ReportUpdateWithoutReportedInput.schema';
import { ReportUncheckedUpdateWithoutReportedInputObjectSchema as ReportUncheckedUpdateWithoutReportedInputObjectSchema } from './ReportUncheckedUpdateWithoutReportedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutReportedInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutReportedInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutReportedInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutReportedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutReportedInput>;
export const ReportUpdateWithWhereUniqueWithoutReportedInputObjectZodSchema = makeSchema();
