import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  bannedById: z.literal(true).optional(),
  unbannedById: z.literal(true).optional()
}).strict();
export const BanSumAggregateInputObjectSchema: z.ZodType<Prisma.BanSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BanSumAggregateInputType>;
export const BanSumAggregateInputObjectZodSchema = makeSchema();
