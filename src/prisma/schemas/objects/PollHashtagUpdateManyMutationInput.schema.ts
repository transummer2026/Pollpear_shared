import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const PollHashtagUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.PollHashtagUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUpdateManyMutationInput>;
export const PollHashtagUpdateManyMutationInputObjectZodSchema = makeSchema();
