import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema";
import { EnumVisibilityFilterObjectSchema as EnumVisibilityFilterObjectSchema } from "./EnumVisibilityFilter.schema";
import { VisibilitySchema } from "../enums/Visibility.schema";
import { EnumRoomStatusFilterObjectSchema as EnumRoomStatusFilterObjectSchema } from "./EnumRoomStatusFilter.schema";
import { RoomStatusSchema } from "../enums/RoomStatus.schema";

const roomscalarwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => RoomScalarWhereInputObjectSchema),
        z.lazy(() => RoomScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoomScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoomScalarWhereInputObjectSchema),
        z.lazy(() => RoomScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    publishedAt: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    bannerUrl: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    visibility: z
      .union([z.lazy(() => EnumVisibilityFilterObjectSchema), VisibilitySchema])
      .optional(),
    status: z
      .union([z.lazy(() => EnumRoomStatusFilterObjectSchema), RoomStatusSchema])
      .optional(),
    createdById: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
  })
  .strict();
export const RoomScalarWhereInputObjectSchema: z.ZodType<Prisma.RoomScalarWhereInput> =
  roomscalarwhereinputSchema as unknown as z.ZodType<Prisma.RoomScalarWhereInput>;
export const RoomScalarWhereInputObjectZodSchema = roomscalarwhereinputSchema;
