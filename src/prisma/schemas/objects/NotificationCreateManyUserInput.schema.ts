import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { NotificationTypeSchema } from '../enums/NotificationType.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  type: NotificationTypeSchema,
  content: z.string(),
  isRead: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const NotificationCreateManyUserInputObjectSchema: z.ZodType<Prisma.NotificationCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateManyUserInput>;
export const NotificationCreateManyUserInputObjectZodSchema = makeSchema();
