import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema as UserUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutRoomMembersNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  joinedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema).optional()
}).strict();
export const RoomMemberUpdateWithoutRoomInputObjectSchema: z.ZodType<Prisma.RoomMemberUpdateWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUpdateWithoutRoomInput>;
export const RoomMemberUpdateWithoutRoomInputObjectZodSchema = makeSchema();
