import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  childPollId: z.number().int(),
  optionId: z.number().int()
}).strict();
export const PollDependencyUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PollDependencyUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUncheckedCreateInput>;
export const PollDependencyUncheckedCreateInputObjectZodSchema = makeSchema();
