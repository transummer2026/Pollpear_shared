import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutReportedInputObjectSchema as ReportCreateWithoutReportedInputObjectSchema } from './ReportCreateWithoutReportedInput.schema';
import { ReportUncheckedCreateWithoutReportedInputObjectSchema as ReportUncheckedCreateWithoutReportedInputObjectSchema } from './ReportUncheckedCreateWithoutReportedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutReportedInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutReportedInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutReportedInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutReportedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutReportedInput>;
export const ReportCreateOrConnectWithoutReportedInputObjectZodSchema = makeSchema();
