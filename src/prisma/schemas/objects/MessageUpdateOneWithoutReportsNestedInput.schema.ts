import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageCreateWithoutReportsInputObjectSchema as MessageCreateWithoutReportsInputObjectSchema } from './MessageCreateWithoutReportsInput.schema';
import { MessageUncheckedCreateWithoutReportsInputObjectSchema as MessageUncheckedCreateWithoutReportsInputObjectSchema } from './MessageUncheckedCreateWithoutReportsInput.schema';
import { MessageCreateOrConnectWithoutReportsInputObjectSchema as MessageCreateOrConnectWithoutReportsInputObjectSchema } from './MessageCreateOrConnectWithoutReportsInput.schema';
import { MessageUpsertWithoutReportsInputObjectSchema as MessageUpsertWithoutReportsInputObjectSchema } from './MessageUpsertWithoutReportsInput.schema';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateToOneWithWhereWithoutReportsInputObjectSchema as MessageUpdateToOneWithWhereWithoutReportsInputObjectSchema } from './MessageUpdateToOneWithWhereWithoutReportsInput.schema';
import { MessageUpdateWithoutReportsInputObjectSchema as MessageUpdateWithoutReportsInputObjectSchema } from './MessageUpdateWithoutReportsInput.schema';
import { MessageUncheckedUpdateWithoutReportsInputObjectSchema as MessageUncheckedUpdateWithoutReportsInputObjectSchema } from './MessageUncheckedUpdateWithoutReportsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutReportsInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutReportsInputObjectSchema).optional(),
  upsert: z.lazy(() => MessageUpsertWithoutReportsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MessageWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MessageWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MessageUpdateToOneWithWhereWithoutReportsInputObjectSchema), z.lazy(() => MessageUpdateWithoutReportsInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutReportsInputObjectSchema)]).optional()
}).strict();
export const MessageUpdateOneWithoutReportsNestedInputObjectSchema: z.ZodType<Prisma.MessageUpdateOneWithoutReportsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateOneWithoutReportsNestedInput>;
export const MessageUpdateOneWithoutReportsNestedInputObjectZodSchema = makeSchema();
