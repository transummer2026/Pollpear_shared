import * as z from 'zod';
import { ReportReasonSchema } from '../../enums/ReportReason.schema';
// prettier-ignore
export const ReportInputSchema = z.object({
    id: z.number().int(),
    reason: ReportReasonSchema,
    content: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    reporterId: z.number().int(),
    reportedId: z.number().int(),
    roomId: z.number().int().optional().nullable(),
    messageId: z.number().int().optional().nullable(),
    pollId: z.number().int().optional().nullable(),
    optionId: z.number().int().optional().nullable(),
    hashtagId: z.number().int().optional().nullable(),
    reporter: z.unknown(),
    reported: z.unknown(),
    room: z.unknown().optional().nullable(),
    message: z.unknown().optional().nullable(),
    poll: z.unknown().optional().nullable(),
    option: z.unknown().optional().nullable(),
    hashtag: z.unknown().optional().nullable()
}).strict();

export type ReportInputType = z.infer<typeof ReportInputSchema>;
