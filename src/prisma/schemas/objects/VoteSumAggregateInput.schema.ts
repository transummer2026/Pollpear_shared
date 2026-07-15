import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdById: z.literal(true).optional()
}).strict();
export const VoteSumAggregateInputObjectSchema: z.ZodType<Prisma.VoteSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VoteSumAggregateInputType>;
export const VoteSumAggregateInputObjectZodSchema = makeSchema();
