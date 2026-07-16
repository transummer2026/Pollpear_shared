import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberCreateWithoutUserInputObjectSchema as RoomMemberCreateWithoutUserInputObjectSchema } from './RoomMemberCreateWithoutUserInput.schema';
import { RoomMemberUncheckedCreateWithoutUserInputObjectSchema as RoomMemberUncheckedCreateWithoutUserInputObjectSchema } from './RoomMemberUncheckedCreateWithoutUserInput.schema';
import { RoomMemberCreateOrConnectWithoutUserInputObjectSchema as RoomMemberCreateOrConnectWithoutUserInputObjectSchema } from './RoomMemberCreateOrConnectWithoutUserInput.schema';
import { RoomMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema as RoomMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './RoomMemberUpsertWithWhereUniqueWithoutUserInput.schema';
import { RoomMemberCreateManyUserInputEnvelopeObjectSchema as RoomMemberCreateManyUserInputEnvelopeObjectSchema } from './RoomMemberCreateManyUserInputEnvelope.schema';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './RoomMemberWhereUniqueInput.schema';
import { RoomMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema as RoomMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './RoomMemberUpdateWithWhereUniqueWithoutUserInput.schema';
import { RoomMemberUpdateManyWithWhereWithoutUserInputObjectSchema as RoomMemberUpdateManyWithWhereWithoutUserInputObjectSchema } from './RoomMemberUpdateManyWithWhereWithoutUserInput.schema';
import { RoomMemberScalarWhereInputObjectSchema as RoomMemberScalarWhereInputObjectSchema } from './RoomMemberScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomMemberCreateWithoutUserInputObjectSchema), z.lazy(() => RoomMemberCreateWithoutUserInputObjectSchema).array(), z.lazy(() => RoomMemberUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => RoomMemberUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoomMemberCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => RoomMemberCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RoomMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => RoomMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoomMemberCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RoomMemberWhereUniqueInputObjectSchema), z.lazy(() => RoomMemberWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RoomMemberWhereUniqueInputObjectSchema), z.lazy(() => RoomMemberWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RoomMemberWhereUniqueInputObjectSchema), z.lazy(() => RoomMemberWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RoomMemberWhereUniqueInputObjectSchema), z.lazy(() => RoomMemberWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RoomMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => RoomMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RoomMemberUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => RoomMemberUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RoomMemberScalarWhereInputObjectSchema), z.lazy(() => RoomMemberScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RoomMemberUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.RoomMemberUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUpdateManyWithoutUserNestedInput>;
export const RoomMemberUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
