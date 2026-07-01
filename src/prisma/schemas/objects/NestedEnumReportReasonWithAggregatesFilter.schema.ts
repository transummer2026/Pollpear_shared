import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportReasonSchema } from '../enums/ReportReason.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumReportReasonFilterObjectSchema as NestedEnumReportReasonFilterObjectSchema } from './NestedEnumReportReasonFilter.schema'

const nestedenumreportreasonwithaggregatesfilterSchema = z.object({
  equals: ReportReasonSchema.optional(),
  in: ReportReasonSchema.array().optional(),
  notIn: ReportReasonSchema.array().optional(),
  not: z.union([ReportReasonSchema, z.lazy(() => NestedEnumReportReasonWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumReportReasonFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumReportReasonFilterObjectSchema).optional()
}).strict();
export const NestedEnumReportReasonWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumReportReasonWithAggregatesFilter> = nestedenumreportreasonwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumReportReasonWithAggregatesFilter>;
export const NestedEnumReportReasonWithAggregatesFilterObjectZodSchema = nestedenumreportreasonwithaggregatesfilterSchema;
