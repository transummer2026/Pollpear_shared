import * as z from 'zod';
import { ReportReasonSchema } from '../../enums/ReportReason.schema';
// prettier-ignore
export const ReportModelSchema = z.object({
    id: z.number().int(),
    reason: ReportReasonSchema,
    content: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    reporterId: z.number().int(),
    reportedId: z.number().int(),
    roomId: z.number().int().nullable(),
    messageId: z.number().int().nullable(),
    pollId: z.number().int().nullable(),
    optionId: z.number().int().nullable(),
    hashtagId: z.number().int().nullable(),
    reporter: z.unknown(),
    reported: z.unknown(),
    room: z.unknown().nullable(),
    message: z.unknown().nullable(),
    poll: z.unknown().nullable(),
    option: z.unknown().nullable(),
    hashtag: z.unknown().nullable()
}).strict();

export type ReportPureType = z.infer<typeof ReportModelSchema>;
