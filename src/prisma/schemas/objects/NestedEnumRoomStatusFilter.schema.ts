import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomStatusSchema } from '../enums/RoomStatus.schema'

const nestedenumroomstatusfilterSchema = z.object({
  equals: RoomStatusSchema.optional(),
  in: RoomStatusSchema.array().optional(),
  notIn: RoomStatusSchema.array().optional(),
  not: z.union([RoomStatusSchema, z.lazy(() => NestedEnumRoomStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumRoomStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumRoomStatusFilter> = nestedenumroomstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumRoomStatusFilter>;
export const NestedEnumRoomStatusFilterObjectZodSchema = nestedenumroomstatusfilterSchema;
