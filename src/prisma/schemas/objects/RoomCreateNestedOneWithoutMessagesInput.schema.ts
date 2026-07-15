import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateWithoutMessagesInputObjectSchema as RoomCreateWithoutMessagesInputObjectSchema } from './RoomCreateWithoutMessagesInput.schema';
import { RoomUncheckedCreateWithoutMessagesInputObjectSchema as RoomUncheckedCreateWithoutMessagesInputObjectSchema } from './RoomUncheckedCreateWithoutMessagesInput.schema';
import { RoomCreateOrConnectWithoutMessagesInputObjectSchema as RoomCreateOrConnectWithoutMessagesInputObjectSchema } from './RoomCreateOrConnectWithoutMessagesInput.schema';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RoomCreateWithoutMessagesInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutMessagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutMessagesInputObjectSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional()
}).strict();
export const RoomCreateNestedOneWithoutMessagesInputObjectSchema: z.ZodType<Prisma.RoomCreateNestedOneWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateNestedOneWithoutMessagesInput>;
export const RoomCreateNestedOneWithoutMessagesInputObjectZodSchema = makeSchema();
