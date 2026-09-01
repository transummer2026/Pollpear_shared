import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionCreateNestedManyWithoutOptionInputObjectSchema as VoteOptionCreateNestedManyWithoutOptionInputObjectSchema } from './VoteOptionCreateNestedManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  text: z.string().max(255),
  sliderLeftLabel: z.string().max(255).optional().nullable(),
  sliderRightLabel: z.string().max(255).optional().nullable(),
  order: z.number().int(),
  deletedAt: z.coerce.date().optional().nullable(),
  voteOptions: z.lazy(() => VoteOptionCreateNestedManyWithoutOptionInputObjectSchema).optional()
}).strict();
export const OptionCreateWithoutPollInputObjectSchema: z.ZodType<Prisma.OptionCreateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionCreateWithoutPollInput>;
export const OptionCreateWithoutPollInputObjectZodSchema = makeSchema();
