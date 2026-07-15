import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomUpdateWithoutPollsInputObjectSchema as RoomUpdateWithoutPollsInputObjectSchema } from './RoomUpdateWithoutPollsInput.schema';
import { RoomUncheckedUpdateWithoutPollsInputObjectSchema as RoomUncheckedUpdateWithoutPollsInputObjectSchema } from './RoomUncheckedUpdateWithoutPollsInput.schema';
import { RoomCreateWithoutPollsInputObjectSchema as RoomCreateWithoutPollsInputObjectSchema } from './RoomCreateWithoutPollsInput.schema';
import { RoomUncheckedCreateWithoutPollsInputObjectSchema as RoomUncheckedCreateWithoutPollsInputObjectSchema } from './RoomUncheckedCreateWithoutPollsInput.schema';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RoomUpdateWithoutPollsInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutPollsInputObjectSchema)]),
  create: z.union([z.lazy(() => RoomCreateWithoutPollsInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutPollsInputObjectSchema)]),
  where: z.lazy(() => RoomWhereInputObjectSchema).optional()
}).strict();
export const RoomUpsertWithoutPollsInputObjectSchema: z.ZodType<Prisma.RoomUpsertWithoutPollsInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpsertWithoutPollsInput>;
export const RoomUpsertWithoutPollsInputObjectZodSchema = makeSchema();
