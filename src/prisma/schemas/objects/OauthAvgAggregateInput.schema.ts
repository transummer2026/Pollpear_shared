import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const OauthAvgAggregateInputObjectSchema: z.ZodType<Prisma.OauthAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OauthAvgAggregateInputType>;
export const OauthAvgAggregateInputObjectZodSchema = makeSchema();
