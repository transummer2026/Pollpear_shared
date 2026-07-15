import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomArgsObjectSchema as RoomArgsObjectSchema } from './RoomArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  room: z.union([z.boolean(), z.lazy(() => RoomArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const RoomMemberIncludeObjectSchema: z.ZodType<Prisma.RoomMemberInclude> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberInclude>;
export const RoomMemberIncludeObjectZodSchema = makeSchema();
