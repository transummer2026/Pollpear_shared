import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomUpdateWithoutRoomMembersInputObjectSchema as RoomUpdateWithoutRoomMembersInputObjectSchema } from './RoomUpdateWithoutRoomMembersInput.schema';
import { RoomUncheckedUpdateWithoutRoomMembersInputObjectSchema as RoomUncheckedUpdateWithoutRoomMembersInputObjectSchema } from './RoomUncheckedUpdateWithoutRoomMembersInput.schema';
import { RoomCreateWithoutRoomMembersInputObjectSchema as RoomCreateWithoutRoomMembersInputObjectSchema } from './RoomCreateWithoutRoomMembersInput.schema';
import { RoomUncheckedCreateWithoutRoomMembersInputObjectSchema as RoomUncheckedCreateWithoutRoomMembersInputObjectSchema } from './RoomUncheckedCreateWithoutRoomMembersInput.schema';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RoomUpdateWithoutRoomMembersInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutRoomMembersInputObjectSchema)]),
  create: z.union([z.lazy(() => RoomCreateWithoutRoomMembersInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutRoomMembersInputObjectSchema)]),
  where: z.lazy(() => RoomWhereInputObjectSchema).optional()
}).strict();
export const RoomUpsertWithoutRoomMembersInputObjectSchema: z.ZodType<Prisma.RoomUpsertWithoutRoomMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpsertWithoutRoomMembersInput>;
export const RoomUpsertWithoutRoomMembersInputObjectZodSchema = makeSchema();
