import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  optionId: z.number().int()
}).strict();
export const PollDependencyUncheckedCreateWithoutChildPollInputObjectSchema: z.ZodType<Prisma.PollDependencyUncheckedCreateWithoutChildPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUncheckedCreateWithoutChildPollInput>;
export const PollDependencyUncheckedCreateWithoutChildPollInputObjectZodSchema = makeSchema();
