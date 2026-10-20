import * as z from 'zod';

export const ReportReasonSchema = z.enum(['spam', 'harassment', 'inappropriate_content', 'other'])

export type ReportReason = z.infer<typeof ReportReasonSchema>;