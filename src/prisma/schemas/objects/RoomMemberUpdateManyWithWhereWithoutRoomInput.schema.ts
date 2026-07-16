import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberScalarWhereInputObjectSchema as RoomMemberScalarWhereInputObjectSchema } from './RoomMemberScalarWhereInput.schema';
import { RoomMemberUpdateManyMutationInputObjectSchema as RoomMemberUpdateManyMutationInputObjectSchema } from './RoomMemberUpdateManyMutationInput.schema';
import { RoomMemberUncheckedUpdateManyWithoutRoomInputObjectSchema as RoomMemberUncheckedUpdateManyWithoutRoomInputObjectSchema } from './RoomMemberUncheckedUpdateManyWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomMemberScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RoomMemberUpdateManyMutationInputObjectSchema), z.lazy(() => RoomMemberUncheckedUpdateManyWithoutRoomInputObjectSchema)])
}).strict();
export const RoomMemberUpdateManyWithWhereWithoutRoomInputObjectSchema: z.ZodType<Prisma.RoomMemberUpdateManyWithWhereWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUpdateManyWithWhereWithoutRoomInput>;
export const RoomMemberUpdateManyWithWhereWithoutRoomInputObjectZodSchema = makeSchema();
