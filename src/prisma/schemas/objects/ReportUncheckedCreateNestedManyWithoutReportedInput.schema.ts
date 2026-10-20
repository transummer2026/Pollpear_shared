import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateWithoutReportedInputObjectSchema as ReportCreateWithoutReportedInputObjectSchema } from './ReportCreateWithoutReportedInput.schema';
import { ReportUncheckedCreateWithoutReportedInputObjectSchema as ReportUncheckedCreateWithoutReportedInputObjectSchema } from './ReportUncheckedCreateWithoutReportedInput.schema';
import { ReportCreateOrConnectWithoutReportedInputObjectSchema as ReportCreateOrConnectWithoutReportedInputObjectSchema } from './ReportCreateOrConnectWithoutReportedInput.schema';
import { ReportCreateManyReportedInputEnvelopeObjectSchema as ReportCreateManyReportedInputEnvelopeObjectSchema } from './ReportCreateManyReportedInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutReportedInputObjectSchema), z.lazy(() => ReportCreateWithoutReportedInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutReportedInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutReportedInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutReportedInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutReportedInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyReportedInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedCreateNestedManyWithoutReportedInputObjectSchema: z.ZodType<Prisma.ReportUncheckedCreateNestedManyWithoutReportedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedCreateNestedManyWithoutReportedInput>;
export const ReportUncheckedCreateNestedManyWithoutReportedInputObjectZodSchema = makeSchema();
