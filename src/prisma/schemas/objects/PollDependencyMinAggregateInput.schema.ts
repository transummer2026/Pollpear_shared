import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  childPollId: z.literal(true).optional(),
  optionId: z.literal(true).optional()
}).strict();
export const PollDependencyMinAggregateInputObjectSchema: z.ZodType<Prisma.PollDependencyMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyMinAggregateInputType>;
export const PollDependencyMinAggregateInputObjectZodSchema = makeSchema();
