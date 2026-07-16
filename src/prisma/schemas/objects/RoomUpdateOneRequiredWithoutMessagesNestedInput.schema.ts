import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateWithoutMessagesInputObjectSchema as RoomCreateWithoutMessagesInputObjectSchema } from './RoomCreateWithoutMessagesInput.schema';
import { RoomUncheckedCreateWithoutMessagesInputObjectSchema as RoomUncheckedCreateWithoutMessagesInputObjectSchema } from './RoomUncheckedCreateWithoutMessagesInput.schema';
import { RoomCreateOrConnectWithoutMessagesInputObjectSchema as RoomCreateOrConnectWithoutMessagesInputObjectSchema } from './RoomCreateOrConnectWithoutMessagesInput.schema';
import { RoomUpsertWithoutMessagesInputObjectSchema as RoomUpsertWithoutMessagesInputObjectSchema } from './RoomUpsertWithoutMessagesInput.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomUpdateToOneWithWhereWithoutMessagesInputObjectSchema as RoomUpdateToOneWithWhereWithoutMessagesInputObjectSchema } from './RoomUpdateToOneWithWhereWithoutMessagesInput.schema';
import { RoomUpdateWithoutMessagesInputObjectSchema as RoomUpdateWithoutMessagesInputObjectSchema } from './RoomUpdateWithoutMessagesInput.schema';
import { RoomUncheckedUpdateWithoutMessagesInputObjectSchema as RoomUncheckedUpdateWithoutMessagesInputObjectSchema } from './RoomUncheckedUpdateWithoutMessagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomCreateWithoutMessagesInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutMessagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutMessagesInputObjectSchema).optional(),
  upsert: z.lazy(() => RoomUpsertWithoutMessagesInputObjectSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RoomUpdateToOneWithWhereWithoutMessagesInputObjectSchema), z.lazy(() => RoomUpdateWithoutMessagesInputObjectSchema), z.lazy(() => RoomUncheckedUpdateWithoutMessagesInputObjectSchema)]).optional()
}).strict();
export const RoomUpdateOneRequiredWithoutMessagesNestedInputObjectSchema: z.ZodType<Prisma.RoomUpdateOneRequiredWithoutMessagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomUpdateOneRequiredWithoutMessagesNestedInput>;
export const RoomUpdateOneRequiredWithoutMessagesNestedInputObjectZodSchema = makeSchema();
