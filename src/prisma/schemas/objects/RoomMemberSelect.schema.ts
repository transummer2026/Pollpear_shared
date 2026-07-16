import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomArgsObjectSchema as RoomArgsObjectSchema } from './RoomArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  joinedAt: z.boolean().optional(),
  roomId: z.boolean().optional(),
  userId: z.boolean().optional(),
  room: z.union([z.boolean(), z.lazy(() => RoomArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const RoomMemberSelectObjectSchema: z.ZodType<Prisma.RoomMemberSelect> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberSelect>;
export const RoomMemberSelectObjectZodSchema = makeSchema();
