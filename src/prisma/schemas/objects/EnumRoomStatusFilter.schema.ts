import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { RoomStatusSchema } from "../enums/RoomStatus.schema";
import { NestedEnumRoomStatusFilterObjectSchema as NestedEnumRoomStatusFilterObjectSchema } from "./NestedEnumRoomStatusFilter.schema";

const makeSchema = () =>
  z
    .object({
      equals: RoomStatusSchema.optional(),
      in: RoomStatusSchema.array().optional(),
      notIn: RoomStatusSchema.array().optional(),
      not: z
        .union([
          RoomStatusSchema,
          z.lazy(() => NestedEnumRoomStatusFilterObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const EnumRoomStatusFilterObjectSchema: z.ZodType<Prisma.EnumRoomStatusFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumRoomStatusFilter>;
export const EnumRoomStatusFilterObjectZodSchema = makeSchema();
