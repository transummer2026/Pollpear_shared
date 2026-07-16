import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateNestedOneWithoutOptionsInputObjectSchema as PollCreateNestedOneWithoutOptionsInputObjectSchema } from './PollCreateNestedOneWithoutOptionsInput.schema';
import { VoteOptionCreateNestedManyWithoutOptionInputObjectSchema as VoteOptionCreateNestedManyWithoutOptionInputObjectSchema } from './VoteOptionCreateNestedManyWithoutOptionInput.schema';
import { PollDependencyCreateNestedManyWithoutOptionInputObjectSchema as PollDependencyCreateNestedManyWithoutOptionInputObjectSchema } from './PollDependencyCreateNestedManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  label: z.string().max(255),
  sliderLeftLabel: z.string().max(255).optional().nullable(),
  sliderRightLabel: z.string().max(255).optional().nullable(),
  order: z.number().int(),
  isDeleted: z.boolean().optional(),
  poll: z.lazy(() => PollCreateNestedOneWithoutOptionsInputObjectSchema),
  voteOptions: z.lazy(() => VoteOptionCreateNestedManyWithoutOptionInputObjectSchema).optional(),
  pollDependencies: z.lazy(() => PollDependencyCreateNestedManyWithoutOptionInputObjectSchema).optional()
}).strict();
export const OptionCreateWithoutReportsInputObjectSchema: z.ZodType<Prisma.OptionCreateWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionCreateWithoutReportsInput>;
export const OptionCreateWithoutReportsInputObjectZodSchema = makeSchema();
