import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const PollDependencyWhereUniqueInputObjectSchema: z.ZodType<Prisma.PollDependencyWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyWhereUniqueInput>;
export const PollDependencyWhereUniqueInputObjectZodSchema = makeSchema();
