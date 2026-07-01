import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { MessageUncheckedCreateInputObjectSchema as MessageUncheckedCreateInputObjectSchema } from './objects/MessageUncheckedCreateInput.schema';

export const MessageCreateOneSchema: z.ZodType<Prisma.MessageCreateArgs> = z.object({   data: MessageUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MessageCreateArgs>;

export const MessageCreateOneZodSchema = z.object({   data: MessageUncheckedCreateInputObjectSchema }).strict();