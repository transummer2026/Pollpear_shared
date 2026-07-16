import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberCreateWithoutRoomInputObjectSchema as RoomMemberCreateWithoutRoomInputObjectSchema } from './RoomMemberCreateWithoutRoomInput.schema';
import { RoomMemberUncheckedCreateWithoutRoomInputObjectSchema as RoomMemberUncheckedCreateWithoutRoomInputObjectSchema } from './RoomMemberUncheckedCreateWithoutRoomInput.schema';
import { RoomMemberCreateOrConnectWithoutRoomInputObjectSchema as RoomMemberCreateOrConnectWithoutRoomInputObjectSchema } from './RoomMemberCreateOrConnectWithoutRoomInput.schema';
import { RoomMemberCreateManyRoomInputEnvelopeObjectSchema as RoomMemberCreateManyRoomInputEnvelopeObjectSchema } from './RoomMemberCreateManyRoomInputEnvelope.schema';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './RoomMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomMemberCreateWithoutRoomInputObjectSchema), z.lazy(() => RoomMemberCreateWithoutRoomInputObjectSchema).array(), z.lazy(() => RoomMemberUncheckedCreateWithoutRoomInputObjectSchema), z.lazy(() => RoomMemberUncheckedCreateWithoutRoomInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoomMemberCreateOrConnectWithoutRoomInputObjectSchema), z.lazy(() => RoomMemberCreateOrConnectWithoutRoomInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoomMemberCreateManyRoomInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RoomMemberWhereUniqueInputObjectSchema), z.lazy(() => RoomMemberWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RoomMemberCreateNestedManyWithoutRoomInputObjectSchema: z.ZodType<Prisma.RoomMemberCreateNestedManyWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberCreateNestedManyWithoutRoomInput>;
export const RoomMemberCreateNestedManyWithoutRoomInputObjectZodSchema = makeSchema();
