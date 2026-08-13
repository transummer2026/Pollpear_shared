import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutRoomMembershipsInputObjectSchema as UserCreateNestedOneWithoutRoomMembershipsInputObjectSchema } from './UserCreateNestedOneWithoutRoomMembershipsInput.schema'

const makeSchema = () => z.object({
  joinedAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutRoomMembershipsInputObjectSchema)
}).strict();
export const RoomMemberCreateWithoutRoomInputObjectSchema: z.ZodType<Prisma.RoomMemberCreateWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberCreateWithoutRoomInput>;
export const RoomMemberCreateWithoutRoomInputObjectZodSchema = makeSchema();
