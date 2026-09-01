import * as z from 'zod';
import { PollTypeSchema } from '../../enums/PollType.schema';
import { VisibilitySchema } from '../../enums/Visibility.schema';
import { PollStatusSchema } from '../../enums/PollStatus.schema';
// prettier-ignore
export const PollModelSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string().nullable(),
    type: PollTypeSchema,
    visibility: VisibilitySchema,
    allowChangeVote: z.boolean(),
    isAnonymous: z.boolean(),
    status: PollStatusSchema,
    publishedAt: z.date().nullable(),
    endsAt: z.date(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    createdById: z.number().int(),
    roomId: z.number().int().nullable(),
    createdBy: z.unknown(),
    room: z.unknown().nullable(),
    votes: z.array(z.unknown()),
    options: z.array(z.unknown()),
    pollHashtags: z.array(z.unknown())
}).strict();

export type PollPureType = z.infer<typeof PollModelSchema>;
