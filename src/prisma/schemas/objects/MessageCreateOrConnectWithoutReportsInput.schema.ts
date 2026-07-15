import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutReportsInputObjectSchema as MessageCreateWithoutReportsInputObjectSchema } from './MessageCreateWithoutReportsInput.schema';
import { MessageUncheckedCreateWithoutReportsInputObjectSchema as MessageUncheckedCreateWithoutReportsInputObjectSchema } from './MessageUncheckedCreateWithoutReportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MessageCreateWithoutReportsInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutReportsInputObjectSchema)])
}).strict();
export const MessageCreateOrConnectWithoutReportsInputObjectSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateOrConnectWithoutReportsInput>;
export const MessageCreateOrConnectWithoutReportsInputObjectZodSchema = makeSchema();
