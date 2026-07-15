import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberWhereUniqueInputObjectSchema as RoomMemberWhereUniqueInputObjectSchema } from './RoomMemberWhereUniqueInput.schema';
import { RoomMemberUpdateWithoutUserInputObjectSchema as RoomMemberUpdateWithoutUserInputObjectSchema } from './RoomMemberUpdateWithoutUserInput.schema';
import { RoomMemberUncheckedUpdateWithoutUserInputObjectSchema as RoomMemberUncheckedUpdateWithoutUserInputObjectSchema } from './RoomMemberUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomMemberWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RoomMemberUpdateWithoutUserInputObjectSchema), z.lazy(() => RoomMemberUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const RoomMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.RoomMemberUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUpdateWithWhereUniqueWithoutUserInput>;
export const RoomMemberUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
