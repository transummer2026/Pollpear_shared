import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { PollScalarRelationFilterObjectSchema as PollScalarRelationFilterObjectSchema } from './PollScalarRelationFilter.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema';
import { VoteOptionListRelationFilterObjectSchema as VoteOptionListRelationFilterObjectSchema } from './VoteOptionListRelationFilter.schema'

const optionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OptionWhereInputObjectSchema), z.lazy(() => OptionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OptionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OptionWhereInputObjectSchema), z.lazy(() => OptionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  sliderLeftLabel: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  sliderRightLabel: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  pollId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  poll: z.union([z.lazy(() => PollScalarRelationFilterObjectSchema), z.lazy(() => PollWhereInputObjectSchema)]).optional(),
  voteOptions: z.lazy(() => VoteOptionListRelationFilterObjectSchema).optional()
}).strict();
export const OptionWhereInputObjectSchema: z.ZodType<Prisma.OptionWhereInput> = optionwhereinputSchema as unknown as z.ZodType<Prisma.OptionWhereInput>;
export const OptionWhereInputObjectZodSchema = optionwhereinputSchema;
