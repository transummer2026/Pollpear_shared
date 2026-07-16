import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  childPollId: z.number().int()
}).strict();
export const PollDependencyUncheckedCreateWithoutOptionInputObjectSchema: z.ZodType<Prisma.PollDependencyUncheckedCreateWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUncheckedCreateWithoutOptionInput>;
export const PollDependencyUncheckedCreateWithoutOptionInputObjectZodSchema = makeSchema();
