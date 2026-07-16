import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageCreateWithoutAuthorInputObjectSchema as MessageCreateWithoutAuthorInputObjectSchema } from './MessageCreateWithoutAuthorInput.schema';
import { MessageUncheckedCreateWithoutAuthorInputObjectSchema as MessageUncheckedCreateWithoutAuthorInputObjectSchema } from './MessageUncheckedCreateWithoutAuthorInput.schema';
import { MessageCreateOrConnectWithoutAuthorInputObjectSchema as MessageCreateOrConnectWithoutAuthorInputObjectSchema } from './MessageCreateOrConnectWithoutAuthorInput.schema';
import { MessageCreateManyAuthorInputEnvelopeObjectSchema as MessageCreateManyAuthorInputEnvelopeObjectSchema } from './MessageCreateManyAuthorInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutAuthorInputObjectSchema), z.lazy(() => MessageCreateWithoutAuthorInputObjectSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutAuthorInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutAuthorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutAuthorInputObjectSchema), z.lazy(() => MessageCreateOrConnectWithoutAuthorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyAuthorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MessageUncheckedCreateNestedManyWithoutAuthorInputObjectSchema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutAuthorInput>;
export const MessageUncheckedCreateNestedManyWithoutAuthorInputObjectZodSchema = makeSchema();
