import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  roomId: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const RoomMemberAvgAggregateInputObjectSchema: z.ZodType<Prisma.RoomMemberAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberAvgAggregateInputType>;
export const RoomMemberAvgAggregateInputObjectZodSchema = makeSchema();
