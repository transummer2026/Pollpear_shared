import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  childPollId: z.number().int()
}).strict();
export const PollDependencyCreateManyOptionInputObjectSchema: z.ZodType<Prisma.PollDependencyCreateManyOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyCreateManyOptionInput>;
export const PollDependencyCreateManyOptionInputObjectZodSchema = makeSchema();
