import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateNestedOneWithoutRoomMembersInputObjectSchema as RoomCreateNestedOneWithoutRoomMembersInputObjectSchema } from './RoomCreateNestedOneWithoutRoomMembersInput.schema';
import { UserCreateNestedOneWithoutRoomMembersInputObjectSchema as UserCreateNestedOneWithoutRoomMembersInputObjectSchema } from './UserCreateNestedOneWithoutRoomMembersInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  joinedAt: z.coerce.date(),
  room: z.lazy(() => RoomCreateNestedOneWithoutRoomMembersInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutRoomMembersInputObjectSchema)
}).strict();
export const RoomMemberCreateInputObjectSchema: z.ZodType<Prisma.RoomMemberCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberCreateInput>;
export const RoomMemberCreateInputObjectZodSchema = makeSchema();
