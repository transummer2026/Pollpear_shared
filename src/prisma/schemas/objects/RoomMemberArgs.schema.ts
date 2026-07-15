import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberSelectObjectSchema as RoomMemberSelectObjectSchema } from './RoomMemberSelect.schema';
import { RoomMemberIncludeObjectSchema as RoomMemberIncludeObjectSchema } from './RoomMemberInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RoomMemberSelectObjectSchema).optional(),
  include: z.lazy(() => RoomMemberIncludeObjectSchema).optional()
}).strict();
export const RoomMemberArgsObjectSchema = makeSchema();
export const RoomMemberArgsObjectZodSchema = makeSchema();
