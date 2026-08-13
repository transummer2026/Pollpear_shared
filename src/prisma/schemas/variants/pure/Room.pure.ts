import * as z from 'zod';
import { VisibilitySchema } from '../../enums/Visibility.schema';
import { RoomStatusSchema } from '../../enums/RoomStatus.schema';
// prettier-ignore
export const RoomModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    bannerUrl: z.string(),
    publishedAt: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    visibility: VisibilitySchema,
    status: RoomStatusSchema,
    createdById: z.number().int(),
    createdBy: z.unknown(),
    polls: z.array(z.unknown()),
    messages: z.array(z.unknown()),
    invitations: z.array(z.unknown()),
    roomMembers: z.array(z.unknown()),
    reports: z.array(z.unknown())
}).strict();

export type RoomPureType = z.infer<typeof RoomModelSchema>;
