import * as z from 'zod';
import { VisibilitySchema } from '../../enums/Visibility.schema';
import { RoomStatusSchema } from '../../enums/RoomStatus.schema';
// prettier-ignore
export const RoomResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    publishedAt: z.date().nullable(),
    bannerUrl: z.string(),
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

export type RoomResultType = z.infer<typeof RoomResultSchema>;
