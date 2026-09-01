import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema as VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema } from './VoteOptionUncheckedCreateNestedManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  text: z.string().max(255),
  sliderLeftLabel: z.string().max(255).optional().nullable(),
  sliderRightLabel: z.string().max(255).optional().nullable(),
  order: z.number().int(),
  deletedAt: z.coerce.date().optional().nullable(),
  pollId: z.number().int(),
  voteOptions: z.lazy(() => VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema).optional()
}).strict();
export const OptionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.OptionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUncheckedCreateInput>;
export const OptionUncheckedCreateInputObjectZodSchema = makeSchema();
