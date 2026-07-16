import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutAuthorInputObjectSchema as MessageUpdateWithoutAuthorInputObjectSchema } from './MessageUpdateWithoutAuthorInput.schema';
import { MessageUncheckedUpdateWithoutAuthorInputObjectSchema as MessageUncheckedUpdateWithoutAuthorInputObjectSchema } from './MessageUncheckedUpdateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MessageUpdateWithoutAuthorInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutAuthorInputObjectSchema)])
}).strict();
export const MessageUpdateWithWhereUniqueWithoutAuthorInputObjectSchema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutAuthorInput>;
export const MessageUpdateWithWhereUniqueWithoutAuthorInputObjectZodSchema = makeSchema();
