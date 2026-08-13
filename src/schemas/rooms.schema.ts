import { z } from 'zod';
import { RoomSchema as RoomModelSchema } from '../prisma/schemas/models/Room.schema';

export const RoomSchema = RoomModelSchema;

export type RoomDTO = z.infer<typeof RoomSchema>;
