import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  joinedAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  roomId: z.number().int()
}).strict();
export const RoomMemberUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.RoomMemberUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberUncheckedCreateWithoutUserInput>;
export const RoomMemberUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
