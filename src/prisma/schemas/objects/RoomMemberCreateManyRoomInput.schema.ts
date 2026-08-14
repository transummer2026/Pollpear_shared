import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  joinedAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.number().int()
}).strict();
export const RoomMemberCreateManyRoomInputObjectSchema: z.ZodType<Prisma.RoomMemberCreateManyRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberCreateManyRoomInput>;
export const RoomMemberCreateManyRoomInputObjectZodSchema = makeSchema();
