import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  bannedById: z.literal(true).optional(),
  unbannedById: z.literal(true).optional()
}).strict();
export const BanAvgAggregateInputObjectSchema: z.ZodType<Prisma.BanAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BanAvgAggregateInputType>;
export const BanAvgAggregateInputObjectZodSchema = makeSchema();
