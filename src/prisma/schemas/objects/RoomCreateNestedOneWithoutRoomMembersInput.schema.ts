import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateWithoutRoomMembersInputObjectSchema as RoomCreateWithoutRoomMembersInputObjectSchema } from './RoomCreateWithoutRoomMembersInput.schema';
import { RoomUncheckedCreateWithoutRoomMembersInputObjectSchema as RoomUncheckedCreateWithoutRoomMembersInputObjectSchema } from './RoomUncheckedCreateWithoutRoomMembersInput.schema';
import { RoomCreateOrConnectWithoutRoomMembersInputObjectSchema as RoomCreateOrConnectWithoutRoomMembersInputObjectSchema } from './RoomCreateOrConnectWithoutRoomMembersInput.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomCreateWithoutRoomMembersInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutRoomMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutRoomMembersInputObjectSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional()
}).strict();
export const RoomCreateNestedOneWithoutRoomMembersInputObjectSchema: z.ZodType<Prisma.RoomCreateNestedOneWithoutRoomMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateNestedOneWithoutRoomMembersInput>;
export const RoomCreateNestedOneWithoutRoomMembersInputObjectZodSchema = makeSchema();
