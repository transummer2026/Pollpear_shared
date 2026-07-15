import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { RoomUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema as RoomUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema } from './RoomUpdateOneRequiredWithoutRoomMembersNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  joinedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  room: z.lazy(() => RoomUpdateOneRequiredWithoutRoomMembersNestedInputObjectSchema).optional()
}).strict();
export const RoomMemberUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.RoomMemberUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUpdateWithoutUserInput>;
export const RoomMemberUpdateWithoutUserInputObjectZodSchema = makeSchema();
