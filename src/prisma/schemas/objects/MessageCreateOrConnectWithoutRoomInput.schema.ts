import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutRoomInputObjectSchema as MessageCreateWithoutRoomInputObjectSchema } from './MessageCreateWithoutRoomInput.schema';
import { MessageUncheckedCreateWithoutRoomInputObjectSchema as MessageUncheckedCreateWithoutRoomInputObjectSchema } from './MessageUncheckedCreateWithoutRoomInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MessageCreateWithoutRoomInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutRoomInputObjectSchema)])
}).strict();
export const MessageCreateOrConnectWithoutRoomInputObjectSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateOrConnectWithoutRoomInput>;
export const MessageCreateOrConnectWithoutRoomInputObjectZodSchema = makeSchema();
