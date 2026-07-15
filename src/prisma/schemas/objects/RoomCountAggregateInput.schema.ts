import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  publishedAt: z.literal(true).optional(),
  bannerUrl: z.literal(true).optional(),
  visibility: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const RoomCountAggregateInputObjectSchema: z.ZodType<Prisma.RoomCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoomCountAggregateInputType>;
export const RoomCountAggregateInputObjectZodSchema = makeSchema();
