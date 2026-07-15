import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './RoomMemberWhereUniqueInput.schema';
import { RoomMemberUpdateWithoutUserInputObjectSchema as RoomMemberUpdateWithoutUserInputObjectSchema } from './RoomMemberUpdateWithoutUserInput.schema';
import { RoomMemberUncheckedUpdateWithoutUserInputObjectSchema as RoomMemberUncheckedUpdateWithoutUserInputObjectSchema } from './RoomMemberUncheckedUpdateWithoutUserInput.schema';
import { RoomMemberCreateWithoutUserInputObjectSchema as RoomMemberCreateWithoutUserInputObjectSchema } from './RoomMemberCreateWithoutUserInput.schema';
import { RoomMemberUncheckedCreateWithoutUserInputObjectSchema as RoomMemberUncheckedCreateWithoutUserInputObjectSchema } from './RoomMemberUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomMemberWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RoomMemberUpdateWithoutUserInputObjectSchema), z.lazy(() => RoomMemberUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => RoomMemberCreateWithoutUserInputObjectSchema), z.lazy(() => RoomMemberUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const RoomMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.RoomMemberUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUpsertWithWhereUniqueWithoutUserInput>;
export const RoomMemberUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
