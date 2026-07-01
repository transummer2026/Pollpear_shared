import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';

export const NotificationFindUniqueSchema: z.ZodType<Prisma.NotificationFindUniqueArgs> = z.object({   where: NotificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NotificationFindUniqueArgs>;

export const NotificationFindUniqueZodSchema = z.object({   where: NotificationWhereUniqueInputObjectSchema }).strict();