import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberCreateWithoutUserInputObjectSchema as RoomMemberCreateWithoutUserInputObjectSchema } from './RoomMemberCreateWithoutUserInput.schema';
import { RoomMemberUncheckedCreateWithoutUserInputObjectSchema as RoomMemberUncheckedCreateWithoutUserInputObjectSchema } from './RoomMemberUncheckedCreateWithoutUserInput.schema';
import { RoomMemberCreateOrConnectWithoutUserInputObjectSchema as RoomMemberCreateOrConnectWithoutUserInputObjectSchema } from './RoomMemberCreateOrConnectWithoutUserInput.schema';
import { RoomMemberCreateManyUserInputEnvelopeObjectSchema as RoomMemberCreateManyUserInputEnvelopeObjectSchema } from './RoomMemberCreateManyUserInputEnvelope.schema';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './RoomMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomMemberCreateWithoutUserInputObjectSchema), z.lazy(() => RoomMemberCreateWithoutUserInputObjectSchema).array(), z.lazy(() => RoomMemberUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => RoomMemberUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RoomMemberCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => RoomMemberCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RoomMemberCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RoomMemberWhereUniqueInputObjectSchema), z.lazy(() => RoomMemberWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RoomMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.RoomMemberUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUncheckedCreateNestedManyWithoutUserInput>;
export const RoomMemberUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
