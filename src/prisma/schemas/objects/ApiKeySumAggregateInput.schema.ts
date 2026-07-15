import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  ownerId: z.literal(true).optional()
}).strict();
export const ApiKeySumAggregateInputObjectSchema: z.ZodType<Prisma.ApiKeySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeySumAggregateInputType>;
export const ApiKeySumAggregateInputObjectZodSchema = makeSchema();
