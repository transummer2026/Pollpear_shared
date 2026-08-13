import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  childPollId: z.literal(true).optional(),
  optionId: z.literal(true).optional()
}).strict();
export const PollDependencySumAggregateInputObjectSchema: z.ZodType<Prisma.PollDependencySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencySumAggregateInputType>;
export const PollDependencySumAggregateInputObjectZodSchema = makeSchema();
