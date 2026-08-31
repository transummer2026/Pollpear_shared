import { z } from 'zod';
import { RoomMemberSchema as RoomMemberModelSchema } from '../prisma/schemas/models/RoomMember.schema';

/**
 * Alias over the generated model for the room membership join table.
 * Membership is created and removed by the server (joining, being invited,
 * being kicked), never posted as a payload, so there is nothing extra to
 * validate - the wrapper just gives it a stable public name.
 */
export const RoomMemberSchema = RoomMemberModelSchema;

export type RoomMemberDTO = z.infer<typeof RoomMemberSchema>;
