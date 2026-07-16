import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereUniqueInputObjectSchema as RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema';
import { RoomCreateWithoutMessagesInputObjectSchema as RoomCreateWithoutMessagesInputObjectSchema } from './RoomCreateWithoutMessagesInput.schema';
import { RoomUncheckedCreateWithoutMessagesInputObjectSchema as RoomUncheckedCreateWithoutMessagesInputObjectSchema } from './RoomUncheckedCreateWithoutMessagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RoomCreateWithoutMessagesInputObjectSchema), z.lazy(() => RoomUncheckedCreateWithoutMessagesInputObjectSchema)])
}).strict();
export const RoomCreateOrConnectWithoutMessagesInputObjectSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomCreateOrConnectWithoutMessagesInput>;
export const RoomCreateOrConnectWithoutMessagesInputObjectZodSchema = makeSchema();
