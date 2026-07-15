import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageCreateWithoutRoomInputObjectSchema as MessageCreateWithoutRoomInputObjectSchema } from './MessageCreateWithoutRoomInput.schema';
import { MessageUncheckedCreateWithoutRoomInputObjectSchema as MessageUncheckedCreateWithoutRoomInputObjectSchema } from './MessageUncheckedCreateWithoutRoomInput.schema';
import { MessageCreateOrConnectWithoutRoomInputObjectSchema as MessageCreateOrConnectWithoutRoomInputObjectSchema } from './MessageCreateOrConnectWithoutRoomInput.schema';
import { MessageCreateManyRoomInputEnvelopeObjectSchema as MessageCreateManyRoomInputEnvelopeObjectSchema } from './MessageCreateManyRoomInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutRoomInputObjectSchema), z.lazy(() => MessageCreateWithoutRoomInputObjectSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutRoomInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutRoomInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutRoomInputObjectSchema), z.lazy(() => MessageCreateOrConnectWithoutRoomInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyRoomInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MessageUncheckedCreateNestedManyWithoutRoomInputObjectSchema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutRoomInput>;
export const MessageUncheckedCreateNestedManyWithoutRoomInputObjectZodSchema = makeSchema();
