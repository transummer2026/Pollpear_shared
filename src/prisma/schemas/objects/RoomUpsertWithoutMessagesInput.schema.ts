import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomUpdateWithoutMessagesInputObjectSchema as RoomUpdateWithoutMessagesInputObjectSchema } from './RoomUpdateWithoutMessagesInput.schema';
import { RoomUncheckedUpdateWithoutMessagesInputObjectSchema as RoomUncheckedUpdateWithoutMessagesInputObjectSchema } from './RoomUncheckedUpdateWithoutMessagesInput.schema';
import { RoomCreateWithoutMessagesInputObjectSchema as RoomCreateWithoutMessagesInputObjectSchema } from './RoomCreateWithoutMessagesInput.schema';
import { RoomUncheckedCreateWithoutMessagesInputObjectSchema as RoomUncheckedCreateWithoutMessagesInputObjectSchema } from './RoomUncheckedCreateWithoutMessagesInput.schema';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RoomUpdateWithoutMessagesInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutMessagesInputObjectSchema)]),
  create: z.union([z.lazy(() => RoomCreateWithoutMessagesInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutMessagesInputObjectSchema)]),
  where: z.lazy(() => RoomWhereInputObjectSchema).optional()
}).strict();
export const RoomUpsertWithoutMessagesInputObjectSchema: z.ZodType<Prisma.RoomUpsertWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpsertWithoutMessagesInput>;
export const RoomUpsertWithoutMessagesInputObjectZodSchema = makeSchema();
