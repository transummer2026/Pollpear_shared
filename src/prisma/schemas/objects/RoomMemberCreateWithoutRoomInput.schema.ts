import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutRoomMembersInputObjectSchema as UserCreateNestedOneWithoutRoomMembersInputObjectSchema } from './UserCreateNestedOneWithoutRoomMembersInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  joinedAt: z.coerce.date(),
  user: z.lazy(() => UserCreateNestedOneWithoutRoomMembersInputObjectSchema)
}).strict();
export const RoomMemberCreateWithoutRoomInputObjectSchema: z.ZodType<Prisma.RoomMemberCreateWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberCreateWithoutRoomInput>;
export const RoomMemberCreateWithoutRoomInputObjectZodSchema = makeSchema();
