import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateNestedOneWithoutRoomMembersInputObjectSchema as RoomCreateNestedOneWithoutRoomMembersInputObjectSchema } from './RoomCreateNestedOneWithoutRoomMembersInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  joinedAt: z.coerce.date(),
  room: z.lazy(() => RoomCreateNestedOneWithoutRoomMembersInputObjectSchema)
}).strict();
export const RoomMemberCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.RoomMemberCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberCreateWithoutUserInput>;
export const RoomMemberCreateWithoutUserInputObjectZodSchema = makeSchema();
