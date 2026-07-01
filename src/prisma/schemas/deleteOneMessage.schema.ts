import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './objects/MessageWhereUniqueInput.schema';

export const MessageDeleteOneSchema: z.ZodType<Prisma.MessageDeleteArgs> = z.object({   where: MessageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MessageDeleteArgs>;

export const MessageDeleteOneZodSchema = z.object({   where: MessageWhereUniqueInputObjectSchema }).strict();