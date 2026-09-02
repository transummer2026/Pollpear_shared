import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyUncheckedCreateNestedManyWithoutOptionInputObjectSchema as PollDependencyUncheckedCreateNestedManyWithoutOptionInputObjectSchema } from './PollDependencyUncheckedCreateNestedManyWithoutOptionInput.schema';
import { ReportUncheckedCreateNestedManyWithoutOptionInputObjectSchema as ReportUncheckedCreateNestedManyWithoutOptionInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  text: z.string(),
  sliderLeftLabel: z.string().optional().nullable(),
  sliderRightLabel: z.string().optional().nullable(),
  order: z.number().int(),
  deletedAt: z.coerce.date().optional().nullable(),
  pollId: z.number().int(),
  pollDependencies: z.lazy(() => PollDependencyUncheckedCreateNestedManyWithoutOptionInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutOptionInputObjectSchema).optional()
}).strict();
export const OptionUncheckedCreateWithoutVoteOptionsInputObjectSchema: z.ZodType<Prisma.OptionUncheckedCreateWithoutVoteOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUncheckedCreateWithoutVoteOptionsInput>;
export const OptionUncheckedCreateWithoutVoteOptionsInputObjectZodSchema = makeSchema();
