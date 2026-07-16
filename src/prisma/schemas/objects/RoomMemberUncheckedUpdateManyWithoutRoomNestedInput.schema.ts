import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberCreateWithoutRoomInputObjectSchema as RoomMemberCreateWithoutRoomInputObjectSchema } from './RoomMemberCreateWithoutRoomInput.schema';
import { RoomMemberUncheckedCreateWithoutRoomInputObjectSchema as RoomMemberUncheckedCreateWithoutRoomInputObjectSchema } from './RoomMemberUncheckedCreateWithoutRoomInput.schema';
import { RoomMemberCreateOrConnectWithoutRoomInputObjectSchema as RoomMemberCreateOrConnectWithoutRoomInputObjectSchema } from './RoomMemberCreateOrConnectWithoutRoomInput.schema';
import { RoomMemberUpsertWithWhereUniqueWithoutRoomInputObjectSchema as RoomMemberUpsertWithWhereUniqueWithoutRoomInputObjectSchema } from './RoomMemberUpsertWithWhereUniqueWithoutRoomInput.schema';
import { RoomMemberCreateManyRoomInputEnvelopeObjectSchema as RoomMemberCreateManyRoomInputEnvelopeObjectSchema } from './RoomMemberCreateManyRoomInputEnvelope.schema';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './RoomMemberWhereUniqueInput.schema';
import { RoomMemberUpdateWithWhereUniqueWithoutRoomInputObjectSchema as RoomMemberUpdateWithWhereUniqueWithoutRoomInputObjectSchema } from './RoomMemberUpdateWithWhereUniqueWithoutRoomInput.schema';
import { RoomMemberUpdateManyWithWhereWithoutRoomInputObjectSchema as RoomMemberUpdateManyWithWhereWithoutRoomInputObjectSchema } from './RoomMemberUpdateManyWithWhereWithoutRoomInput.schema';
import { RoomMemberScalarWhereInputObjectSchema as RoomMemberScalarWhereInputObjectSchema } from './RoomMemberScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomMemberCreateWithoutRoomInputObjectSchema), z.lazy(() => RoomMemberCreateWithoutRoomInputObjectSchema).array(), z.lazy(() => RoomMemberUncheckedCreateWithoutRoomInputObjectSchema), z.lazy(() => RoomMemberUncheckedCreateWithoutRoomInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoomMemberCreateOrConnectWithoutRoomInputObjectSchema), z.lazy(() => RoomMemberCreateOrConnectWithoutRoomInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RoomMemberUpsertWithWhereUniqueWithoutRoomInputObjectSchema), z.lazy(() => RoomMemberUpsertWithWhereUniqueWithoutRoomInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoomMemberCreateManyRoomInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RoomMemberWhereUniqueInputObjectSchema), z.lazy(() => RoomMemberWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RoomMemberWhereUniqueInputObjectSchema), z.lazy(() => RoomMemberWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RoomMemberWhereUniqueInputObjectSchema), z.lazy(() => RoomMemberWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RoomMemberWhereUniqueInputObjectSchema), z.lazy(() => RoomMemberWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RoomMemberUpdateWithWhereUniqueWithoutRoomInputObjectSchema), z.lazy(() => RoomMemberUpdateWithWhereUniqueWithoutRoomInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RoomMemberUpdateManyWithWhereWithoutRoomInputObjectSchema), z.lazy(() => RoomMemberUpdateManyWithWhereWithoutRoomInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RoomMemberScalarWhereInputObjectSchema), z.lazy(() => RoomMemberScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RoomMemberUncheckedUpdateManyWithoutRoomNestedInputObjectSchema: z.ZodType<Prisma.RoomMemberUncheckedUpdateManyWithoutRoomNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUncheckedUpdateManyWithoutRoomNestedInput>;
export const RoomMemberUncheckedUpdateManyWithoutRoomNestedInputObjectZodSchema = makeSchema();
