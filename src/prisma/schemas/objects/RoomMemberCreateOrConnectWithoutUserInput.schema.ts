import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './RoomMemberWhereUniqueInput.schema';
import { RoomMemberCreateWithoutUserInputObjectSchema as RoomMemberCreateWithoutUserInputObjectSchema } from './RoomMemberCreateWithoutUserInput.schema';
import { RoomMemberUncheckedCreateWithoutUserInputObjectSchema as RoomMemberUncheckedCreateWithoutUserInputObjectSchema } from './RoomMemberUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoomMemberCreateWithoutUserInputObjectSchema), z.lazy(() => RoomMemberUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const RoomMemberCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.RoomMemberCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberCreateOrConnectWithoutUserInput>;
export const RoomMemberCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
