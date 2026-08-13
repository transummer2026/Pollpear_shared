import * as z from 'zod';
import { VisibilitySchema } from '../../enums/Visibility.schema';
import { RoomStatusSchema } from '../../enums/RoomStatus.schema';
// prettier-ignore
export const RoomInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().optional().nullable(),
    bannerUrl: z.string(),
    publishedAt: z.date().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
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

export type RoomInputType = z.infer<typeof RoomInputSchema>;
