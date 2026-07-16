import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  joinedAt: z.coerce.date(),
  userId: z.number().int()
}).strict();
export const RoomMemberUncheckedCreateWithoutRoomInputObjectSchema: z.ZodType<Prisma.RoomMemberUncheckedCreateWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUncheckedCreateWithoutRoomInput>;
export const RoomMemberUncheckedCreateWithoutRoomInputObjectZodSchema = makeSchema();
