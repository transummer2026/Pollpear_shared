import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  joinedAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  roomId: z.number().int(),
  userId: z.number().int()
}).strict();
export const RoomMemberCreateManyInputObjectSchema: z.ZodType<Prisma.RoomMemberCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberCreateManyInput>;
export const RoomMemberCreateManyInputObjectZodSchema = makeSchema();
