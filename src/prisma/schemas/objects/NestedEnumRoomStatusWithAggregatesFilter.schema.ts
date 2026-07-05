import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { RoomStatusSchema } from "../enums/RoomStatus.schema";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumRoomStatusFilterObjectSchema as NestedEnumRoomStatusFilterObjectSchema } from "./NestedEnumRoomStatusFilter.schema";

const nestedenumroomstatuswithaggregatesfilterSchema = z
  .object({
    equals: RoomStatusSchema.optional(),
    in: RoomStatusSchema.array().optional(),
    notIn: RoomStatusSchema.array().optional(),
    not: z
      .union([
        RoomStatusSchema,
        z.lazy(() => NestedEnumRoomStatusWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumRoomStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumRoomStatusFilterObjectSchema).optional(),
  })
  .strict();
export const NestedEnumRoomStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumRoomStatusWithAggregatesFilter> =
  nestedenumroomstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumRoomStatusWithAggregatesFilter>;
export const NestedEnumRoomStatusWithAggregatesFilterObjectZodSchema =
  nestedenumroomstatuswithaggregatesfilterSchema;
