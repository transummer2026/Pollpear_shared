import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  text: z.string().max(255),
  sliderLeftLabel: z.string().max(255).optional().nullable(),
  sliderRightLabel: z.string().max(255).optional().nullable(),
  order: z.number().int(),
  deletedAt: z.coerce.date().optional().nullable(),
  pollId: z.number().int()
}).strict();
export const OptionCreateManyInputObjectSchema: z.ZodType<Prisma.OptionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionCreateManyInput>;
export const OptionCreateManyInputObjectZodSchema = makeSchema();
