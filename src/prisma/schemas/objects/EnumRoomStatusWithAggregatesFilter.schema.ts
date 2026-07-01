import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomStatusSchema } from '../enums/RoomStatus.schema';
import { NestedEnumRoomStatusWithAggregatesFilterObjectSchema as NestedEnumRoomStatusWithAggregatesFilterObjectSchema } from './NestedEnumRoomStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRoomStatusFilterObjectSchema as NestedEnumRoomStatusFilterObjectSchema } from './NestedEnumRoomStatusFilter.schema'

const makeSchema = () => z.object({
  equals: RoomStatusSchema.optional(),
  in: RoomStatusSchema.array().optional(),
  notIn: RoomStatusSchema.array().optional(),
  not: z.union([RoomStatusSchema, z.lazy(() => NestedEnumRoomStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRoomStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRoomStatusFilterObjectSchema).optional()
}).strict();
export const EnumRoomStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumRoomStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumRoomStatusWithAggregatesFilter>;
export const EnumRoomStatusWithAggregatesFilterObjectZodSchema = makeSchema();
