import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageUpdateWithoutReportsInputObjectSchema as MessageUpdateWithoutReportsInputObjectSchema } from './MessageUpdateWithoutReportsInput.schema';
import { MessageUncheckedUpdateWithoutReportsInputObjectSchema as MessageUncheckedUpdateWithoutReportsInputObjectSchema } from './MessageUncheckedUpdateWithoutReportsInput.schema';
import { MessageCreateWithoutReportsInputObjectSchema as MessageCreateWithoutReportsInputObjectSchema } from './MessageCreateWithoutReportsInput.schema';
import { MessageUncheckedCreateWithoutReportsInputObjectSchema as MessageUncheckedCreateWithoutReportsInputObjectSchema } from './MessageUncheckedCreateWithoutReportsInput.schema';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MessageUpdateWithoutReportsInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutReportsInputObjectSchema)]),
  create: z.union([z.lazy(() => MessageCreateWithoutReportsInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutReportsInputObjectSchema)]),
  where: z.lazy(() => MessageWhereInputObjectSchema).optional()
}).strict();
export const MessageUpsertWithoutReportsInputObjectSchema: z.ZodType<Prisma.MessageUpsertWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpsertWithoutReportsInput>;
export const MessageUpsertWithoutReportsInputObjectZodSchema = makeSchema();
