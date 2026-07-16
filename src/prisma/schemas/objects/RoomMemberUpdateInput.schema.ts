import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RoomUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema as RoomUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema } from './RoomUpdateOneRequiredWithoutRoomMembersNestedInput.schema';
import { UserUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema as UserUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutRoomMembersNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  joinedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  room: z.lazy(() => RoomUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema).optional()
}).strict();
export const RoomMemberUpdateInputObjectSchema: z.ZodType<Prisma.RoomMemberUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUpdateInput>;
export const RoomMemberUpdateInputObjectZodSchema = makeSchema();
