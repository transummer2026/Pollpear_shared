import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema';
import { RoomUpdateWithoutRoomMembersInputObjectSchema as RoomUpdateWithoutRoomMembersInputObjectSchema } from './RoomUpdateWithoutRoomMembersInput.schema';
import { RoomUncheckedUpdateWithoutRoomMembersInputObjectSchema as RoomUncheckedUpdateWithoutRoomMembersInputObjectSchema } from './RoomUncheckedUpdateWithoutRoomMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RoomUpdateWithoutRoomMembersInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutRoomMembersInputObjectSchema)])
}).strict();
export const RoomUpdateToOneWithWhereWithoutRoomMembersInputObjectSchema: z.ZodType<Prisma.RoomUpdateToOneWithWhereWithoutRoomMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpdateToOneWithWhereWithoutRoomMembersInput>;
export const RoomUpdateToOneWithWhereWithoutRoomMembersInputObjectZodSchema = makeSchema();
