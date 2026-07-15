import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema as VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema } from './VoteOptionUncheckedCreateNestedManyWithoutOptionInput.schema';
import { PollDependencyUncheckedCreateNestedManyWithoutOptionInputObjectSchema as PollDependencyUncheckedCreateNestedManyWithoutOptionInputObjectSchema } from './PollDependencyUncheckedCreateNestedManyWithoutOptionInput.schema';
import { ReportUncheckedCreateNestedManyWithoutOptionInputObjectSchema as ReportUncheckedCreateNestedManyWithoutOptionInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  label: z.string(),
  sliderLeftLabel: z.string().optional().nullable(),
  sliderRightLabel: z.string().optional().nullable(),
  order: z.number().int(),
  isDeleted: z.boolean().optional(),
  voteOptions: z.lazy(() => VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema).optional(),
  pollDependencies: z.lazy(() => PollDependencyUncheckedCreateNestedManyWithoutOptionInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutOptionInputObjectSchema).optional()
}).strict();
export const OptionUncheckedCreateWithoutPollInputObjectSchema: z.ZodType<Prisma.OptionUncheckedCreateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUncheckedCreateWithoutPollInput>;
export const OptionUncheckedCreateWithoutPollInputObjectZodSchema = makeSchema();
