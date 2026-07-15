import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './RoomMemberWhereUniqueInput.schema';
import { RoomMemberUpdateWithoutRoomInputObjectSchema as RoomMemberUpdateWithoutRoomInputObjectSchema } from './RoomMemberUpdateWithoutRoomInput.schema';
import { RoomMemberUncheckedUpdateWithoutRoomInputObjectSchema as RoomMemberUncheckedUpdateWithoutRoomInputObjectSchema } from './RoomMemberUncheckedUpdateWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomMemberWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RoomMemberUpdateWithoutRoomInputObjectSchema), z.lazy(() => RoomMemberUncheckedUpdateWithoutRoomInputObjectSchema)])
}).strict();
export const RoomMemberUpdateWithWhereUniqueWithoutRoomInputObjectSchema: z.ZodType<Prisma.RoomMemberUpdateWithWhereUniqueWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUpdateWithWhereUniqueWithoutRoomInput>;
export const RoomMemberUpdateWithWhereUniqueWithoutRoomInputObjectZodSchema = makeSchema();
