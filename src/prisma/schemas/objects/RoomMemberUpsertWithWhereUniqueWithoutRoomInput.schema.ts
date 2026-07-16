import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './RoomMemberWhereUniqueInput.schema';
import { RoomMemberUpdateWithoutRoomInputObjectSchema as RoomMemberUpdateWithoutRoomInputObjectSchema } from './RoomMemberUpdateWithoutRoomInput.schema';
import { RoomMemberUncheckedUpdateWithoutRoomInputObjectSchema as RoomMemberUncheckedUpdateWithoutRoomInputObjectSchema } from './RoomMemberUncheckedUpdateWithoutRoomInput.schema';
import { RoomMemberCreateWithoutRoomInputObjectSchema as RoomMemberCreateWithoutRoomInputObjectSchema } from './RoomMemberCreateWithoutRoomInput.schema';
import { RoomMemberUncheckedCreateWithoutRoomInputObjectSchema as RoomMemberUncheckedCreateWithoutRoomInputObjectSchema } from './RoomMemberUncheckedCreateWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomMemberWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RoomMemberUpdateWithoutRoomInputObjectSchema), z.lazy(() => RoomMemberUncheckedUpdateWithoutRoomInputObjectSchema)]),
  create: z.union([z.lazy(() => RoomMemberCreateWithoutRoomInputObjectSchema), z.lazy(() => RoomMemberUncheckedCreateWithoutRoomInputObjectSchema)])
}).strict();
export const RoomMemberUpsertWithWhereUniqueWithoutRoomInputObjectSchema: z.ZodType<Prisma.RoomMemberUpsertWithWhereUniqueWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUpsertWithWhereUniqueWithoutRoomInput>;
export const RoomMemberUpsertWithWhereUniqueWithoutRoomInputObjectZodSchema = makeSchema();
