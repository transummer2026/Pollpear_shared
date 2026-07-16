import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema';
import { RoomUpdateWithoutMessagesInputObjectSchema as RoomUpdateWithoutMessagesInputObjectSchema } from './RoomUpdateWithoutMessagesInput.schema';
import { RoomUncheckedUpdateWithoutMessagesInputObjectSchema as RoomUncheckedUpdateWithoutMessagesInputObjectSchema } from './RoomUncheckedUpdateWithoutMessagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RoomUpdateWithoutMessagesInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutMessagesInputObjectSchema)])
}).strict();
export const RoomUpdateToOneWithWhereWithoutMessagesInputObjectSchema: z.ZodType<Prisma.RoomUpdateToOneWithWhereWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpdateToOneWithWhereWithoutMessagesInput>;
export const RoomUpdateToOneWithWhereWithoutMessagesInputObjectZodSchema = makeSchema();
