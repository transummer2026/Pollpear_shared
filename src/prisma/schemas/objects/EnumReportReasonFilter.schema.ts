import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportReasonSchema } from '../enums/ReportReason.schema';
import { NestedEnumReportReasonFilterObjectSchema as NestedEnumReportReasonFilterObjectSchema } from './NestedEnumReportReasonFilter.schema'

const makeSchema = () => z.object({
  equals: ReportReasonSchema.optional(),
  in: ReportReasonSchema.array().optional(),
  notIn: ReportReasonSchema.array().optional(),
  not: z.union([ReportReasonSchema, z.lazy(() => NestedEnumReportReasonFilterObjectSchema)]).optional()
}).strict();
export const EnumReportReasonFilterObjectSchema: z.ZodType<Prisma.EnumReportReasonFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumReportReasonFilter>;
export const EnumReportReasonFilterObjectZodSchema = makeSchema();
