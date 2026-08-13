import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  joinedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  roomId: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const RoomMemberMinAggregateInputObjectSchema: z.ZodType<Prisma.RoomMemberMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberMinAggregateInputType>;
export const RoomMemberMinAggregateInputObjectZodSchema = makeSchema();
