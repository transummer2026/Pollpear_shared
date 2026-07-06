import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema";
import { EnumNotificationTypeFilterObjectSchema as EnumNotificationTypeFilterObjectSchema } from "./EnumNotificationTypeFilter.schema";
import { NotificationTypeSchema } from "../enums/NotificationType.schema";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema";
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from "./BoolFilter.schema";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";

const notificationwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => NotificationWhereInputObjectSchema),
        z.lazy(() => NotificationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => NotificationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => NotificationWhereInputObjectSchema),
        z.lazy(() => NotificationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumNotificationTypeFilterObjectSchema),
        NotificationTypeSchema,
      ])
      .optional(),
    content: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    isRead: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
  })
  .strict();
export const NotificationWhereInputObjectSchema: z.ZodType<Prisma.NotificationWhereInput> =
  notificationwhereinputSchema as unknown as z.ZodType<Prisma.NotificationWhereInput>;
export const NotificationWhereInputObjectZodSchema =
  notificationwhereinputSchema;
