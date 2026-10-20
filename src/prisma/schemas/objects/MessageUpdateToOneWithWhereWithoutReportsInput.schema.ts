import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema';
import { MessageUpdateWithoutReportsInputObjectSchema as MessageUpdateWithoutReportsInputObjectSchema } from './MessageUpdateWithoutReportsInput.schema';
import { MessageUncheckedUpdateWithoutReportsInputObjectSchema as MessageUncheckedUpdateWithoutReportsInputObjectSchema } from './MessageUncheckedUpdateWithoutReportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MessageUpdateWithoutReportsInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutReportsInputObjectSchema)])
}).strict();
export const MessageUpdateToOneWithWhereWithoutReportsInputObjectSchema: z.ZodType<Prisma.MessageUpdateToOneWithWhereWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateToOneWithWhereWithoutReportsInput>;
export const MessageUpdateToOneWithWhereWithoutReportsInputObjectZodSchema = makeSchema();
