import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  childPollId: z.literal(true).optional(),
  optionId: z.literal(true).optional()
}).strict();
export const PollDependencyAvgAggregateInputObjectSchema: z.ZodType<Prisma.PollDependencyAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyAvgAggregateInputType>;
export const PollDependencyAvgAggregateInputObjectZodSchema = makeSchema();
