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
export const RoomMemberMaxAggregateInputObjectSchema: z.ZodType<Prisma.RoomMemberMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberMaxAggregateInputType>;
export const RoomMemberMaxAggregateInputObjectZodSchema = makeSchema();
