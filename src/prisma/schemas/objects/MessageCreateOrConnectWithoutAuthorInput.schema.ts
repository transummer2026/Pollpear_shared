import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutAuthorInputObjectSchema as MessageCreateWithoutAuthorInputObjectSchema } from './MessageCreateWithoutAuthorInput.schema';
import { MessageUncheckedCreateWithoutAuthorInputObjectSchema as MessageUncheckedCreateWithoutAuthorInputObjectSchema } from './MessageUncheckedCreateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MessageCreateWithoutAuthorInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutAuthorInputObjectSchema)])
}).strict();
export const MessageCreateOrConnectWithoutAuthorInputObjectSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateOrConnectWithoutAuthorInput>;
export const MessageCreateOrConnectWithoutAuthorInputObjectZodSchema = makeSchema();
