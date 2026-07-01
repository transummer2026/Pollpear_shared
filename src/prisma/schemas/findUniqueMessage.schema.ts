import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './objects/MessageWhereUniqueInput.schema';

export const MessageFindUniqueSchema: z.ZodType<Prisma.MessageFindUniqueArgs> = z.object({   where: MessageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MessageFindUniqueArgs>;

export const MessageFindUniqueZodSchema = z.object({   where: MessageWhereUniqueInputObjectSchema }).strict();