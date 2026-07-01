import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomStatusSchema } from '../enums/RoomStatus.schema'

const makeSchema = () => z.object({
  set: RoomStatusSchema.optional()
}).strict();
export const EnumRoomStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumRoomStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumRoomStatusFieldUpdateOperationsInput>;
export const EnumRoomStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
