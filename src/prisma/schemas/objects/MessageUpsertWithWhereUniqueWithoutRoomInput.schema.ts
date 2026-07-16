import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutRoomInputObjectSchema as MessageUpdateWithoutRoomInputObjectSchema } from './MessageUpdateWithoutRoomInput.schema';
import { MessageUncheckedUpdateWithoutRoomInputObjectSchema as MessageUncheckedUpdateWithoutRoomInputObjectSchema } from './MessageUncheckedUpdateWithoutRoomInput.schema';
import { MessageCreateWithoutRoomInputObjectSchema as MessageCreateWithoutRoomInputObjectSchema } from './MessageCreateWithoutRoomInput.schema';
import { MessageUncheckedCreateWithoutRoomInputObjectSchema as MessageUncheckedCreateWithoutRoomInputObjectSchema } from './MessageUncheckedCreateWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MessageUpdateWithoutRoomInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutRoomInputObjectSchema)]),
  create: z.union([z.lazy(() => MessageCreateWithoutRoomInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutRoomInputObjectSchema)])
}).strict();
export const MessageUpsertWithWhereUniqueWithoutRoomInputObjectSchema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutRoomInput>;
export const MessageUpsertWithWhereUniqueWithoutRoomInputObjectZodSchema = makeSchema();
