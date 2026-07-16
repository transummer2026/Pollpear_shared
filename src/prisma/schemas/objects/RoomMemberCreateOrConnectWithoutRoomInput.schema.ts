import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './RoomMemberWhereUniqueInput.schema';
import { RoomMemberCreateWithoutRoomInputObjectSchema as RoomMemberCreateWithoutRoomInputObjectSchema } from './RoomMemberCreateWithoutRoomInput.schema';
import { RoomMemberUncheckedCreateWithoutRoomInputObjectSchema as RoomMemberUncheckedCreateWithoutRoomInputObjectSchema } from './RoomMemberUncheckedCreateWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoomMemberCreateWithoutRoomInputObjectSchema), z.lazy(() => RoomMemberUncheckedCreateWithoutRoomInputObjectSchema)])
}).strict();
export const RoomMemberCreateOrConnectWithoutRoomInputObjectSchema: z.ZodType<Prisma.RoomMemberCreateOrConnectWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberCreateOrConnectWithoutRoomInput>;
export const RoomMemberCreateOrConnectWithoutRoomInputObjectZodSchema = makeSchema();
