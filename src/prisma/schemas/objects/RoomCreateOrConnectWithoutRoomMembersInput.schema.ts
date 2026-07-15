import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomCreateWithoutRoomMembersInputObjectSchema as RoomCreateWithoutRoomMembersInputObjectSchema } from './RoomCreateWithoutRoomMembersInput.schema';
import { RoomUncheckedCreateWithoutRoomMembersInputObjectSchema as RoomUncheckedCreateWithoutRoomMembersInputObjectSchema } from './RoomUncheckedCreateWithoutRoomMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoomCreateWithoutRoomMembersInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutRoomMembersInputObjectSchema)])
}).strict();
export const RoomCreateOrConnectWithoutRoomMembersInputObjectSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutRoomMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateOrConnectWithoutRoomMembersInput>;
export const RoomCreateOrConnectWithoutRoomMembersInputObjectZodSchema = makeSchema();
