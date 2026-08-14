import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { RoomUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema as RoomUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema } from './RoomUpdateOneRequiredWithoutRoomMembersNestedInput.schema';
import { UserUpdateOneRequiredWithoutRoomMembershipsNestedInputObjectSchema as UserUpdateOneRequiredWithoutRoomMembershipsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutRoomMembershipsNestedInput.schema'

const makeSchema = () => z.object({
  joinedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  room: z.lazy(() => RoomUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRoomMembershipsNestedInputObjectSchema).optional()
}).strict();
export const RoomMemberUpdateInputObjectSchema: z.ZodType<Prisma.RoomMemberUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUpdateInput>;
export const RoomMemberUpdateInputObjectZodSchema = makeSchema();
