import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { IntFilterObjectSchema as IntFilterObjectSchema } from "./IntFilter.schema";
import { EnumFriendshipStatusFilterObjectSchema as EnumFriendshipStatusFilterObjectSchema } from "./EnumFriendshipStatusFilter.schema";
import { FriendshipStatusSchema } from "../enums/FriendshipStatus.schema";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";

const friendshipscalarwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => FriendshipScalarWhereInputObjectSchema),
        z.lazy(() => FriendshipScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FriendshipScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FriendshipScalarWhereInputObjectSchema),
        z.lazy(() => FriendshipScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumFriendshipStatusFilterObjectSchema),
        FriendshipStatusSchema,
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    requesterId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
    addresseeId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number().int()])
      .optional(),
  })
  .strict();
export const FriendshipScalarWhereInputObjectSchema: z.ZodType<Prisma.FriendshipScalarWhereInput> =
  friendshipscalarwhereinputSchema as unknown as z.ZodType<Prisma.FriendshipScalarWhereInput>;
export const FriendshipScalarWhereInputObjectZodSchema =
  friendshipscalarwhereinputSchema;
