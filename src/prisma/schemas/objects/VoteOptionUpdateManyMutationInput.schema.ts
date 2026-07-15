import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const VoteOptionUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.VoteOptionUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUpdateManyMutationInput>;
export const VoteOptionUpdateManyMutationInputObjectZodSchema = makeSchema();
