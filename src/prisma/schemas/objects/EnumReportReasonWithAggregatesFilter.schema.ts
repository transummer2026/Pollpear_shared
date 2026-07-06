import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { ReportReasonSchema } from "../enums/ReportReason.schema";
import { NestedEnumReportReasonWithAggregatesFilterObjectSchema as NestedEnumReportReasonWithAggregatesFilterObjectSchema } from "./NestedEnumReportReasonWithAggregatesFilter.schema";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumReportReasonFilterObjectSchema as NestedEnumReportReasonFilterObjectSchema } from "./NestedEnumReportReasonFilter.schema";

const makeSchema = () =>
  z
    .object({
      equals: ReportReasonSchema.optional(),
      in: ReportReasonSchema.array().optional(),
      notIn: ReportReasonSchema.array().optional(),
      not: z
        .union([
          ReportReasonSchema,
          z.lazy(() => NestedEnumReportReasonWithAggregatesFilterObjectSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z.lazy(() => NestedEnumReportReasonFilterObjectSchema).optional(),
      _max: z.lazy(() => NestedEnumReportReasonFilterObjectSchema).optional(),
    })
    .strict();
export const EnumReportReasonWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumReportReasonWithAggregatesFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumReportReasonWithAggregatesFilter>;
export const EnumReportReasonWithAggregatesFilterObjectZodSchema = makeSchema();
