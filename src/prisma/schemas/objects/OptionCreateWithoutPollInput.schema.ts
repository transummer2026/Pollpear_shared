import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionCreateNestedManyWithoutOptionInputObjectSchema as VoteOptionCreateNestedManyWithoutOptionInputObjectSchema } from './VoteOptionCreateNestedManyWithoutOptionInput.schema';
import { PollDependencyCreateNestedManyWithoutOptionInputObjectSchema as PollDependencyCreateNestedManyWithoutOptionInputObjectSchema } from './PollDependencyCreateNestedManyWithoutOptionInput.schema';
import { ReportCreateNestedManyWithoutOptionInputObjectSchema as ReportCreateNestedManyWithoutOptionInputObjectSchema } from './ReportCreateNestedManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  label: z.string().max(255),
  sliderLeftLabel: z.string().max(255).optional().nullable(),
  sliderRightLabel: z.string().max(255).optional().nullable(),
  order: z.number().int(),
  isDeleted: z.boolean().optional(),
  voteOptions: z.lazy(() => VoteOptionCreateNestedManyWithoutOptionInputObjectSchema).optional(),
  pollDependencies: z.lazy(() => PollDependencyCreateNestedManyWithoutOptionInputObjectSchema).optional(),
  reports: z.lazy(() => ReportCreateNestedManyWithoutOptionInputObjectSchema).optional()
}).strict();
export const OptionCreateWithoutPollInputObjectSchema: z.ZodType<Prisma.OptionCreateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionCreateWithoutPollInput>;
export const OptionCreateWithoutPollInputObjectZodSchema = makeSchema();
