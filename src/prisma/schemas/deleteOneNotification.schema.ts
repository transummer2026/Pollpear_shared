import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';

export const NotificationDeleteOneSchema: z.ZodType<Prisma.NotificationDeleteArgs> = z.object({   where: NotificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NotificationDeleteArgs>;

export const NotificationDeleteOneZodSchema = z.object({   where: NotificationWhereUniqueInputObjectSchema }).strict();