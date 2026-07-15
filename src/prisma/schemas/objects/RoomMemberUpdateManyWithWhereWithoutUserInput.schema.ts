import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberScalarWhereInputObjectSchema as RoomMemberScalarWhereInputObjectSchema } from './RoomMemberScalarWhereInput.schema';
import { RoomMemberUpdateManyMutationInputObjectSchema as RoomMemberUpdateManyMutationInputObjectSchema } from './RoomMemberUpdateManyMutationInput.schema';
import { RoomMemberUncheckedUpdateManyWithoutUserInputObjectSchema as RoomMemberUncheckedUpdateManyWithoutUserInputObjectSchema } from './RoomMemberUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomMemberScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RoomMemberUpdateManyMutationInputObjectSchema), z.lazy(() => RoomMemberUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const RoomMemberUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.RoomMemberUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUpdateManyWithWhereWithoutUserInput>;
export const RoomMemberUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
