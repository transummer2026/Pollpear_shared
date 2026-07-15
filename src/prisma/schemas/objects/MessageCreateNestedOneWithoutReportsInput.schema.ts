import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageCreateWithoutReportsInputObjectSchema as MessageCreateWithoutReportsInputObjectSchema } from './MessageCreateWithoutReportsInput.schema';
import { MessageUncheckedCreateWithoutReportsInputObjectSchema as MessageUncheckedCreateWithoutReportsInputObjectSchema } from './MessageUncheckedCreateWithoutReportsInput.schema';
import { MessageCreateOrConnectWithoutReportsInputObjectSchema as MessageCreateOrConnectWithoutReportsInputObjectSchema } from './MessageCreateOrConnectWithoutReportsInput.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutReportsInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutReportsInputObjectSchema).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputObjectSchema).optional()
}).strict();
export const MessageCreateNestedOneWithoutReportsInputObjectSchema: z.ZodType<Prisma.MessageCreateNestedOneWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateNestedOneWithoutReportsInput>;
export const MessageCreateNestedOneWithoutReportsInputObjectZodSchema = makeSchema();
