import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';
import { UserCreateNestedOneWithoutNotificationsInputObjectSchema as UserCreateNestedOneWithoutNotificationsInputObjectSchema } from './UserCreateNestedOneWithoutNotificationsInput.schema'

const makeSchema = () => z.object({
  type: NotificationTypeSchema,
  content: z.string(),
  isRead: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  actorId: z.number().int().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutNotificationsInputObjectSchema)
}).strict();
export const NotificationCreateInputObjectSchema: z.ZodType<Prisma.NotificationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateInput>;
export const NotificationCreateInputObjectZodSchema = makeSchema();
