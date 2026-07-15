import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const OauthSumAggregateInputObjectSchema: z.ZodType<Prisma.OauthSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OauthSumAggregateInputType>;
export const OauthSumAggregateInputObjectZodSchema = makeSchema();
