import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(255),
  isVisible: z.boolean()
}).strict();
export const HashtagCreateManyInputObjectSchema: z.ZodType<Prisma.HashtagCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagCreateManyInput>;
export const HashtagCreateManyInputObjectZodSchema = makeSchema();
