import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberWhereInputObjectSchema as RoomMemberWhereInputObjectSchema } from './RoomMemberWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomMemberWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountRoomMembersArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountRoomMembersArgsObjectZodSchema = makeSchema();
