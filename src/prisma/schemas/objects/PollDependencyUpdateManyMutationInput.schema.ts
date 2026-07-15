import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const PollDependencyUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.PollDependencyUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUpdateManyMutationInput>;
export const PollDependencyUpdateManyMutationInputObjectZodSchema = makeSchema();
