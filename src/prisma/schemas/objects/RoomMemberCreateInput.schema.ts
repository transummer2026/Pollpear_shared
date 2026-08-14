import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateNestedOneWithoutRoomMembersInputObjectSchema as RoomCreateNestedOneWithoutRoomMembersInputObjectSchema } from './RoomCreateNestedOneWithoutRoomMembersInput.schema';
import { UserCreateNestedOneWithoutRoomMembershipsInputObjectSchema as UserCreateNestedOneWithoutRoomMembershipsInputObjectSchema } from './UserCreateNestedOneWithoutRoomMembershipsInput.schema'

const makeSchema = () => z.object({
  joinedAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  room: z.lazy(() => RoomCreateNestedOneWithoutRoomMembersInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutRoomMembershipsInputObjectSchema)
}).strict();
export const RoomMemberCreateInputObjectSchema: z.ZodType<Prisma.RoomMemberCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberCreateInput>;
export const RoomMemberCreateInputObjectZodSchema = makeSchema();
