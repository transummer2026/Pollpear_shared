import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  text: z.string(),
  sliderLeftLabel: z.string().optional().nullable(),
  sliderRightLabel: z.string().optional().nullable(),
  order: z.number().int(),
  deletedAt: z.coerce.date().optional().nullable(),
  pollId: z.number().int()
}).strict();
export const OptionUncheckedCreateWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.OptionUncheckedCreateWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUncheckedCreateWithoutVoteOptionsInput>;
export const OptionUncheckedCreateWithoutVoteOptionsInputObjectZodSchema = makeSchema();
