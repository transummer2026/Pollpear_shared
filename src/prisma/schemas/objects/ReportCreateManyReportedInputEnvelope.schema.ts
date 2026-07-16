import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateManyReportedInputObjectSchema as ReportCreateManyReportedInputObjectSchema } from './ReportCreateManyReportedInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyReportedInputObjectSchema), z.lazy(() => ReportCreateManyReportedInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyReportedInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyReportedInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyReportedInputEnvelope>;
export const ReportCreateManyReportedInputEnvelopeObjectZodSchema = makeSchema();
