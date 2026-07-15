import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema';
import { RoomUpdateWithoutPollsInputObjectSchema as RoomUpdateWithoutPollsInputObjectSchema } from './RoomUpdateWithoutPollsInput.schema';
import { RoomUncheckedUpdateWithoutPollsInputObjectSchema as RoomUncheckedUpdateWithoutPollsInputObjectSchema } from './RoomUncheckedUpdateWithoutPollsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RoomUpdateWithoutPollsInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutPollsInputObjectSchema)])
}).strict();
export const RoomUpdateToOneWithWhereWithoutPollsInputObjectSchema: z.ZodType<Prisma.RoomUpdateToOneWithWhereWithoutPollsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpdateToOneWithWhereWithoutPollsInput>;
export const RoomUpdateToOneWithWhereWithoutPollsInputObjectZodSchema = makeSchema();
