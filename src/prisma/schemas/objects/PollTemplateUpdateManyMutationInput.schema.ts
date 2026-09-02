import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const PollTemplateUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.PollTemplateUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUpdateManyMutationInput>;
export const PollTemplateUpdateManyMutationInputObjectZodSchema = makeSchema();
