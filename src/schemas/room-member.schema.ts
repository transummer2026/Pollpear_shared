import { z } from 'zod';
import { RoomMemberSchema as RoomMemberModelSchema } from '../prisma/schemas/models/RoomMember.schema';

export const RoomMemberSchema = RoomMemberModelSchema;

export type RoomMemberDTO = z.infer<typeof RoomMemberSchema>;
