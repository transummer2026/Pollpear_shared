import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageCreateWithoutRoomInputObjectSchema as MessageCreateWithoutRoomInputObjectSchema } from './MessageCreateWithoutRoomInput.schema';
import { MessageUncheckedCreateWithoutRoomInputObjectSchema as MessageUncheckedCreateWithoutRoomInputObjectSchema } from './MessageUncheckedCreateWithoutRoomInput.schema';
import { MessageCreateOrConnectWithoutRoomInputObjectSchema as MessageCreateOrConnectWithoutRoomInputObjectSchema } from './MessageCreateOrConnectWithoutRoomInput.schema';
import { MessageUpsertWithWhereUniqueWithoutRoomInputObjectSchema as MessageUpsertWithWhereUniqueWithoutRoomInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutRoomInput.schema';
import { MessageCreateManyRoomInputEnvelopeObjectSchema as MessageCreateManyRoomInputEnvelopeObjectSchema } from './MessageCreateManyRoomInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithWhereUniqueWithoutRoomInputObjectSchema as MessageUpdateWithWhereUniqueWithoutRoomInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutRoomInput.schema';
import { MessageUpdateManyWithWhereWithoutRoomInputObjectSchema as MessageUpdateManyWithWhereWithoutRoomInputObjectSchema } from './MessageUpdateManyWithWhereWithoutRoomInput.schema';
import { MessageScalarWhereInputObjectSchema as MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutRoomInputObjectSchema), z.lazy(() => MessageCreateWithoutRoomInputObjectSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutRoomInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutRoomInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutRoomInputObjectSchema), z.lazy(() => MessageCreateOrConnectWithoutRoomInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MessageUpsertWithWhereUniqueWithoutRoomInputObjectSchema), z.lazy(() => MessageUpsertWithWhereUniqueWithoutRoomInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyRoomInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MessageUpdateWithWhereUniqueWithoutRoomInputObjectSchema), z.lazy(() => MessageUpdateWithWhereUniqueWithoutRoomInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MessageUpdateManyWithWhereWithoutRoomInputObjectSchema), z.lazy(() => MessageUpdateManyWithWhereWithoutRoomInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MessageScalarWhereInputObjectSchema), z.lazy(() => MessageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MessageUncheckedUpdateManyWithoutRoomNestedInputObjectSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutRoomNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutRoomNestedInput>;
export const MessageUncheckedUpdateManyWithoutRoomNestedInputObjectZodSchema = makeSchema();
