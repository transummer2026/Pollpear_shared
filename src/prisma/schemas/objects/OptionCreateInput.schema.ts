import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateNestedOneWithoutOptionsInputObjectSchema as PollCreateNestedOneWithoutOptionsInputObjectSchema } from './PollCreateNestedOneWithoutOptionsInput.schema';
import { VoteOptionCreateNestedManyWithoutOptionInputObjectSchema as VoteOptionCreateNestedManyWithoutOptionInputObjectSchema } from './VoteOptionCreateNestedManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  text: z.string().max(255),
  sliderLeftLabel: z.string().max(255).optional().nullable(),
  sliderRightLabel: z.string().max(255).optional().nullable(),
  order: z.number().int(),
  deletedAt: z.coerce.date().optional().nullable(),
  poll: z.lazy(() => PollCreateNestedOneWithoutOptionsInputObjectSchema),
  voteOptions: z.lazy(() => VoteOptionCreateNestedManyWithoutOptionInputObjectSchema).optional()
}).strict();
export const OptionCreateInputObjectSchema: z.ZodType<Prisma.OptionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionCreateInput>;
export const OptionCreateInputObjectZodSchema = makeSchema();
