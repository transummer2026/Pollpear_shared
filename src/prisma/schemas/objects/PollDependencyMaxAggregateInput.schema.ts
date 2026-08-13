import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  childPollId: z.literal(true).optional(),
  optionId: z.literal(true).optional()
}).strict();
export const PollDependencyMaxAggregateInputObjectSchema: z.ZodType<Prisma.PollDependencyMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyMaxAggregateInputType>;
export const PollDependencyMaxAggregateInputObjectZodSchema = makeSchema();
