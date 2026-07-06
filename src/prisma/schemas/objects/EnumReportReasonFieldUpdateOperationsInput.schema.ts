import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { ReportReasonSchema } from "../enums/ReportReason.schema";

const makeSchema = () =>
  z
    .object({
      set: ReportReasonSchema.optional(),
    })
    .strict();
export const EnumReportReasonFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumReportReasonFieldUpdateOperationsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumReportReasonFieldUpdateOperationsInput>;
export const EnumReportReasonFieldUpdateOperationsInputObjectZodSchema =
  makeSchema();
