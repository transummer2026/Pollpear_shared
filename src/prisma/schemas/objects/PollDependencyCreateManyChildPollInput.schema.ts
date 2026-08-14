import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  optionId: z.number().int()
}).strict();
export const PollDependencyCreateManyChildPollInputObjectSchema: z.ZodType<Prisma.PollDependencyCreateManyChildPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyCreateManyChildPollInput>;
export const PollDependencyCreateManyChildPollInputObjectZodSchema = makeSchema();
