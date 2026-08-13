import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  banReason: z.literal(true).optional(),
  unbanReason: z.literal(true).optional(),
  startedAt: z.literal(true).optional(),
  endedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  bannedById: z.literal(true).optional(),
  unbannedById: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const BanCountAggregateInputObjectSchema: z.ZodType<Prisma.BanCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BanCountAggregateInputType>;
export const BanCountAggregateInputObjectZodSchema = makeSchema();
