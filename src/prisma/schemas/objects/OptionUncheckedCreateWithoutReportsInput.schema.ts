import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema as VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema } from './VoteOptionUncheckedCreateNestedManyWithoutOptionInput.schema';
import { PollDependencyUncheckedCreateNestedManyWithoutOptionInputObjectSchema as PollDependencyUncheckedCreateNestedManyWithoutOptionInputObjectSchema } from './PollDependencyUncheckedCreateNestedManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  text: z.string(),
  sliderLeftLabel: z.string().optional().nullable(),
  sliderRightLabel: z.string().optional().nullable(),
  order: z.number().int(),
  deletedAt: z.coerce.date().optional().nullable(),
  pollId: z.number().int(),
  voteOptions: z.lazy(() => VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema).optional(),
  pollDependencies: z.lazy(() => PollDependencyUncheckedCreateNestedManyWithoutOptionInputObjectSchema).optional()
}).strict();
export const OptionUncheckedCreateWithoutReportsInputObjectSchema: z.ZodType<Prisma.OptionUncheckedCreateWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUncheckedCreateWithoutReportsInput>;
export const OptionUncheckedCreateWithoutReportsInputObjectZodSchema = makeSchema();
