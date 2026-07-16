import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutAuthorInputObjectSchema as MessageUpdateWithoutAuthorInputObjectSchema } from './MessageUpdateWithoutAuthorInput.schema';
import { MessageUncheckedUpdateWithoutAuthorInputObjectSchema as MessageUncheckedUpdateWithoutAuthorInputObjectSchema } from './MessageUncheckedUpdateWithoutAuthorInput.schema';
import { MessageCreateWithoutAuthorInputObjectSchema as MessageCreateWithoutAuthorInputObjectSchema } from './MessageCreateWithoutAuthorInput.schema';
import { MessageUncheckedCreateWithoutAuthorInputObjectSchema as MessageUncheckedCreateWithoutAuthorInputObjectSchema } from './MessageUncheckedCreateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MessageUpdateWithoutAuthorInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutAuthorInputObjectSchema)]),
  create: z.union([z.lazy(() => MessageCreateWithoutAuthorInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutAuthorInputObjectSchema)])
}).strict();
export const MessageUpsertWithWhereUniqueWithoutAuthorInputObjectSchema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutAuthorInput>;
export const MessageUpsertWithWhereUniqueWithoutAuthorInputObjectZodSchema = makeSchema();
