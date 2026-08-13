import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  text: z.string().max(255),
  sliderLeftLabel: z.string().max(255).optional().nullable(),
  sliderRightLabel: z.string().max(255).optional().nullable(),
  order: z.number().int(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const OptionCreateManyPollInputObjectSchema: z.ZodType<Prisma.OptionCreateManyPollInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionCreateManyPollInput>;
export const OptionCreateManyPollInputObjectZodSchema = makeSchema();
