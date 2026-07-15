import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutRoomInputObjectSchema as MessageUpdateWithoutRoomInputObjectSchema } from './MessageUpdateWithoutRoomInput.schema';
import { MessageUncheckedUpdateWithoutRoomInputObjectSchema as MessageUncheckedUpdateWithoutRoomInputObjectSchema } from './MessageUncheckedUpdateWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MessageUpdateWithoutRoomInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutRoomInputObjectSchema)])
}).strict();
export const MessageUpdateWithWhereUniqueWithoutRoomInputObjectSchema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutRoomInput>;
export const MessageUpdateWithWhereUniqueWithoutRoomInputObjectZodSchema = makeSchema();
