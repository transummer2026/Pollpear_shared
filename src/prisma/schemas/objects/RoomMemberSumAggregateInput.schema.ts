import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  roomId: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const RoomMemberSumAggregateInputObjectSchema: z.ZodType<Prisma.RoomMemberSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberSumAggregateInputType>;
export const RoomMemberSumAggregateInputObjectZodSchema = makeSchema();
