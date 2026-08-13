import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  keyHash: z.literal(true).optional(),
  appName: z.literal(true).optional(),
  revoked: z.literal(true).optional(),
  expiredAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  ownerId: z.literal(true).optional()
}).strict();
export const ApiKeyMinAggregateInputObjectSchema: z.ZodType<Prisma.ApiKeyMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyMinAggregateInputType>;
export const ApiKeyMinAggregateInputObjectZodSchema = makeSchema();
