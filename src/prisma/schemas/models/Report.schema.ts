import * as z from "zod";
import { ReportReasonSchema } from "../enums/ReportReason.schema";

export const ReportSchema = z.object({
  id: z.number().int(),
  reason: ReportReasonSchema,
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  reporterId: z.number().int(),
  reportedId: z.number().int(),
  roomId: z.number().int().nullish(),
  messageId: z.number().int().nullish(),
  pollId: z.number().int().nullish(),
  optionId: z.number().int().nullish(),
  hashtagId: z.number().int().nullish(),
});

export type ReportType = z.infer<typeof ReportSchema>;
