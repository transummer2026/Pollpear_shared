import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { ReportReasonSchema } from "../enums/ReportReason.schema";

const nestedenumreportreasonfilterSchema = z
  .object({
    equals: ReportReasonSchema.optional(),
    in: ReportReasonSchema.array().optional(),
    notIn: ReportReasonSchema.array().optional(),
    not: z
      .union([
        ReportReasonSchema,
        z.lazy(() => NestedEnumReportReasonFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();
export const NestedEnumReportReasonFilterObjectSchema: z.ZodType<Prisma.NestedEnumReportReasonFilter> =
  nestedenumreportreasonfilterSchema as unknown as z.ZodType<Prisma.NestedEnumReportReasonFilter>;
export const NestedEnumReportReasonFilterObjectZodSchema =
  nestedenumreportreasonfilterSchema;
