import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';
import { EnumNotificationTypeFieldUpdateOperationsInputObjectSchema as EnumNotificationTypeFieldUpdateOperationsInputObjectSchema } from './EnumNotificationTypeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutNotificationsNestedInputObjectSchema as UserUpdateOneRequiredWithoutNotificationsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutNotificationsNestedInput.schema'

const makeSchema = () => z.object({
  type: z.union([NotificationTypeSchema, z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isRead: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutNotificationsNestedInputObjectSchema).optional()
}).strict();
export const NotificationUpdateInputObjectSchema: z.ZodType<Prisma.NotificationUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUpdateInput>;
export const NotificationUpdateInputObjectZodSchema = makeSchema();
