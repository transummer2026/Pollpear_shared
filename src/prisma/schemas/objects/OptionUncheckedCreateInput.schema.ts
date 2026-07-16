import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema as VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema } from './VoteOptionUncheckedCreateNestedManyWithoutOptionInput.schema';
import { PollDependencyUncheckedCreateNestedManyWithoutOptionInputObjectSchema as PollDependencyUncheckedCreateNestedManyWithoutOptionInputObjectSchema } from './PollDependencyUncheckedCreateNestedManyWithoutOptionInput.schema';
import { ReportUncheckedCreateNestedManyWithoutOptionInputObjectSchema as ReportUncheckedCreateNestedManyWithoutOptionInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  label: z.string().max(255),
  sliderLeftLabel: z.string().max(255).optional().nullable(),
  sliderRightLabel: z.string().max(255).optional().nullable(),
  order: z.number().int(),
  isDeleted: z.boolean().optional(),
  pollId: z.number().int(),
  voteOptions: z.lazy(() => VoteOptionUncheckedCreateNestedManyWithoutOptionInputObjectSchema).optional(),
  pollDependencies: z.lazy(() => PollDependencyUncheckedCreateNestedManyWithoutOptionInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutOptionInputObjectSchema).optional()
}).strict();
export const OptionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.OptionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUncheckedCreateInput>;
export const OptionUncheckedCreateInputObjectZodSchema = makeSchema();
