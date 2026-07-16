import * as z from 'zod';
import { PollTypeSchema } from '../../enums/PollType.schema';
import { VisibilitySchema } from '../../enums/Visibility.schema';
import { PollStatusSchema } from '../../enums/PollStatus.schema';
// prettier-ignore
export const PollInputSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string().optional().nullable(),
    type: PollTypeSchema,
    createdAt: z.date(),
    publishedAt: z.date().optional().nullable(),
    updatedAt: z.date(),
    endsAt: z.date(),
    visibility: VisibilitySchema,
    allowChangeVote: z.boolean(),
    isAnonymous: z.boolean(),
    status: PollStatusSchema,
    createdById: z.number().int(),
    roomId: z.number().int().optional().nullable(),
    createdBy: z.unknown(),
    room: z.unknown().optional().nullable(),
    options: z.array(z.unknown()),
    pollHashtags: z.array(z.unknown()),
    pollTemplates: z.array(z.unknown()),
    reports: z.array(z.unknown()),
    childDependencies: z.array(z.unknown())
}).strict();

export type PollInputType = z.infer<typeof PollInputSchema>;
