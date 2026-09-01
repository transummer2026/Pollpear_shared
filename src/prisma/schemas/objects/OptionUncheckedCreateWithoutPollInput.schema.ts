import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema as VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema } from './VoteOptionUncheckedCreateNestedManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  text: z.string(),
  sliderLeftLabel: z.string().optional().nullable(),
  sliderRightLabel: z.string().optional().nullable(),
  order: z.number().int(),
  deletedAt: z.coerce.date().optional().nullable(),
  voteOptions: z.lazy(() => VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema).optional()
}).strict();
export const OptionUncheckedCreateWithoutPollInputObjectSchema: z.ZodType<Prisma.OptionUncheckedCreateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUncheckedCreateWithoutPollInput>;
export const OptionUncheckedCreateWithoutPollInputObjectZodSchema = makeSchema();
