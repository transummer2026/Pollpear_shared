import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateWithoutRoomMembersInputObjectSchema as RoomCreateWithoutRoomMembersInputObjectSchema } from './RoomCreateWithoutRoomMembersInput.schema';
import { RoomUncheckedCreateWithoutRoomMembersInputObjectSchema as RoomUncheckedCreateWithoutRoomMembersInputObjectSchema } from './RoomUncheckedCreateWithoutRoomMembersInput.schema';
import { RoomCreateOrConnectWithoutRoomMembersInputObjectSchema as RoomCreateOrConnectWithoutRoomMembersInputObjectSchema } from './RoomCreateOrConnectWithoutRoomMembersInput.schema';
import { RoomUpsertWithoutRoomMembersInputObjectSchema as RoomUpsertWithoutRoomMembersInputObjectSchema } from './RoomUpsertWithoutRoomMembersInput.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomUpdateToOneWithWhereWithoutRoomMembersInputObjectSchema as RoomUpdateToOneWithWhereWithoutRoomMembersInputObjectSchema } from './RoomUpdateToOneWithWhereWithoutRoomMembersInput.schema';
import { RoomUpdateWithoutRoomMembersInputObjectSchema as RoomUpdateWithoutRoomMembersInputObjectSchema } from './RoomUpdateWithoutRoomMembersInput.schema';
import { RoomUncheckedUpdateWithoutRoomMembersInputObjectSchema as RoomUncheckedUpdateWithoutRoomMembersInputObjectSchema } from './RoomUncheckedUpdateWithoutRoomMembersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomCreateWithoutRoomMembersInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutRoomMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutRoomMembersInputObjectSchema).optional(),
  upsert: z.lazy(() => RoomUpsertWithoutRoomMembersInputObjectSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RoomUpdateToOneWithWhereWithoutRoomMembersInputObjectSchema), z.lazy(() => RoomUpdateWithoutRoomMembersInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutRoomMembersInputObjectSchema)]).optional()
}).strict();
export const RoomUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema: z.ZodType<Prisma.RoomUpdateOneRequiredWithoutRoomMembersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpdateOneRequiredWithoutRoomMembersNestedInput>;
export const RoomUpdateOneRequiredWithoutRoomMembersNestedInputObjectZodSchema = makeSchema();
