import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema as VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema } from './VoteOptionUncheckedCreateNestedManyWithoutOptionInput.schema';
import { ReportUncheckedCreateNestedManyWithoutOptionInputObjectSchema as ReportUncheckedCreateNestedManyWithoutOptionInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  label: z.string(),
  sliderLeftLabel: z.string().optional().nullable(),
  sliderRightLabel: z.string().optional().nullable(),
  order: z.number().int(),
  isDeleted: z.boolean().optional(),
  pollId: z.number().int(),
  voteOptions: z.lazy(() => VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutOptionInputObjectSchema).optional()
}).strict();
export const OptionUncheckedCreateWithoutPollDependenciesInputObjectSchema: z.ZodType<Prisma.OptionUncheckedCreateWithoutPollDependenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUncheckedCreateWithoutPollDependenciesInput>;
export const OptionUncheckedCreateWithoutPollDependenciesInputObjectZodSchema = makeSchema();
