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
      reporterId: z.number().int(),
      reportedId: z.number().int(),
      roomId: z.number().int().optional().nullable(),
      messageId: z.number().int().optional().nullable(),
      pollId: z.number().int().optional().nullable(),
      optionId: z.number().int().optional().nullable(),
      hashtagId: z.number().int().optional().nullable(),
    })
    .strict();
export const ReportUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ReportUncheckedCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedCreateInput>;
export const ReportUncheckedCreateInputObjectZodSchema = makeSchema();
