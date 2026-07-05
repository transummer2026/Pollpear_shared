import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { ReportReasonSchema } from "../enums/ReportReason.schema";

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      reason: ReportReasonSchema,
      content: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      reportedId: z.number().int(),
      roomId: z.number().int().optional().nullable(),
      messageId: z.number().int().optional().nullable(),
      pollId: z.number().int().optional().nullable(),
      optionId: z.number().int().optional().nullable(),
      hashtagId: z.number().int().optional().nullable(),
    })
    .strict();
export const ReportCreateManyReporterInputObjectSchema: z.ZodType<Prisma.ReportCreateManyReporterInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ReportCreateManyReporterInput>;
export const ReportCreateManyReporterInputObjectZodSchema = makeSchema();
