import type { Prisma } from '../../../../src/generated/prisma/client';
import * as z from 'zod';
import { NotificationUncheckedCreateInputObjectSchema as NotificationUncheckedCreateInputObjectSchema } from './objects/NotificationUncheckedCreateInput.schema';

export const NotificationCreateOneSchema: z.ZodType<Prisma.NotificationCreateArgs> = z.object({   data: NotificationUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NotificationCreateArgs>;

export const NotificationCreateOneZodSchema = z.object({   data: NotificationUncheckedCreateInputObjectSchema }).strict();