import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportCreateManyReporterInputObjectSchema as ReportCreateManyReporterInputObjectSchema } from './ReportCreateManyReporterInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReportCreateManyReporterInputObjectSchema), z.lazy(() => ReportCreateManyReporterInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReportCreateManyReporterInputEnvelopeObjectSchema: z.ZodType<Prisma.ReportCreateManyReporterInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyReporterInputEnvelope>;
export const ReportCreateManyReporterInputEnvelopeObjectZodSchema = makeSchema();
