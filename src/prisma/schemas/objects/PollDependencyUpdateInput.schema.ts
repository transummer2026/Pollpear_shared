import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  childPollId: z.number().int(),
  optionId: z.number().int()
}).strict();
export const PollDependencyUpdateInputObjectSchema: z.ZodType<Prisma.PollDependencyUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUpdateInput>;
export const PollDependencyUpdateInputObjectZodSchema = makeSchema();
