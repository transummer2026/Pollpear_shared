import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutReportedInputObjectSchema as ReportUpdateWithoutReportedInputObjectSchema } from './ReportUpdateWithoutReportedInput.schema';
import { ReportUncheckedUpdateWithoutReportedInputObjectSchema as ReportUncheckedUpdateWithoutReportedInputObjectSchema } from './ReportUncheckedUpdateWithoutReportedInput.schema';
import { ReportCreateWithoutReportedInputObjectSchema as ReportCreateWithoutReportedInputObjectSchema } from './ReportCreateWithoutReportedInput.schema';
import { ReportUncheckedCreateWithoutReportedInputObjectSchema as ReportUncheckedCreateWithoutReportedInputObjectSchema } from './ReportUncheckedCreateWithoutReportedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutReportedInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutReportedInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutReportedInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutReportedInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutReportedInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutReportedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutReportedInput>;
export const ReportUpsertWithWhereUniqueWithoutReportedInputObjectZodSchema = makeSchema();
