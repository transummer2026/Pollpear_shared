import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageCreateWithoutAuthorInputObjectSchema as MessageCreateWithoutAuthorInputObjectSchema } from './MessageCreateWithoutAuthorInput.schema';
import { MessageUncheckedCreateWithoutAuthorInputObjectSchema as MessageUncheckedCreateWithoutAuthorInputObjectSchema } from './MessageUncheckedCreateWithoutAuthorInput.schema';
import { MessageCreateOrConnectWithoutAuthorInputObjectSchema as MessageCreateOrConnectWithoutAuthorInputObjectSchema } from './MessageCreateOrConnectWithoutAuthorInput.schema';
import { MessageUpsertWithWhereUniqueWithoutAuthorInputObjectSchema as MessageUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutAuthorInput.schema';
import { MessageCreateManyAuthorInputEnvelopeObjectSchema as MessageCreateManyAuthorInputEnvelopeObjectSchema } from './MessageCreateManyAuthorInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithWhereUniqueWithoutAuthorInputObjectSchema as MessageUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutAuthorInput.schema';
import { MessageUpdateManyWithWhereWithoutAuthorInputObjectSchema as MessageUpdateManyWithWhereWithoutAuthorInputObjectSchema } from './MessageUpdateManyWithWhereWithoutAuthorInput.schema';
import { MessageScalarWhereInputObjectSchema as MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutAuthorInputObjectSchema), z.lazy(() => MessageCreateWithoutAuthorInputObjectSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutAuthorInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutAuthorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutAuthorInputObjectSchema), z.lazy(() => MessageCreateOrConnectWithoutAuthorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MessageUpsertWithWhereUniqueWithoutAuthorInputObjectSchema), z.lazy(() => MessageUpsertWithWhereUniqueWithoutAuthorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyAuthorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MessageUpdateWithWhereUniqueWithoutAuthorInputObjectSchema), z.lazy(() => MessageUpdateWithWhereUniqueWithoutAuthorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MessageUpdateManyWithWhereWithoutAuthorInputObjectSchema), z.lazy(() => MessageUpdateManyWithWhereWithoutAuthorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MessageScalarWhereInputObjectSchema), z.lazy(() => MessageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MessageUpdateManyWithoutAuthorNestedInputObjectSchema: z.ZodType<Prisma.MessageUpdateManyWithoutAuthorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateManyWithoutAuthorNestedInput>;
export const MessageUpdateManyWithoutAuthorNestedInputObjectZodSchema = makeSchema();
