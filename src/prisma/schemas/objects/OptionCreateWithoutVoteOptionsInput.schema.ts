import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateNestedOneWithoutOptionsInputObjectSchema as PollCreateNestedOneWithoutOptionsInputObjectSchema } from './PollCreateNestedOneWithoutOptionsInput.schema'

const makeSchema = () => z.object({
  text: z.string().max(255),
  sliderLeftLabel: z.string().max(255).optional().nullable(),
  sliderRightLabel: z.string().max(255).optional().nullable(),
  order: z.number().int(),
  deletedAt: z.coerce.date().optional().nullable(),
  poll: z.lazy(() => PollCreateNestedOneWithoutOptionsInputObjectSchema)
}).strict();
export const OptionCreateWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.OptionCreateWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionCreateWithoutVoteOptionsInput>;
export const OptionCreateWithoutVoteOptionsInputObjectZodSchema = makeSchema();
