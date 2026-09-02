import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTypeSchema } from '../enums/PollType.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { PollStatusSchema } from '../enums/PollStatus.schema';
import { OptionUncheckedCreateNestedManyWithoutPollInputObjectSchema as OptionUncheckedCreateNestedManyWithoutPollInputObjectSchema } from './OptionUncheckedCreateNestedManyWithoutPollInput.schema';
import { PollHashtagUncheckedCreateNestedManyWithoutPollInputObjectSchema as PollHashtagUncheckedCreateNestedManyWithoutPollInputObjectSchema } from './PollHashtagUncheckedCreateNestedManyWithoutPollInput.schema';
import { PollTemplateUncheckedCreateNestedManyWithoutPollInputObjectSchema as PollTemplateUncheckedCreateNestedManyWithoutPollInputObjectSchema } from './PollTemplateUncheckedCreateNestedManyWithoutPollInput.schema';
import { ReportUncheckedCreateNestedManyWithoutPollInputObjectSchema as ReportUncheckedCreateNestedManyWithoutPollInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutPollInput.schema';
import { PollDependencyUncheckedCreateNestedManyWithoutChildPollInputObjectSchema as PollDependencyUncheckedCreateNestedManyWithoutChildPollInputObjectSchema } from './PollDependencyUncheckedCreateNestedManyWithoutChildPollInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  type: PollTypeSchema,
  visibility: VisibilitySchema.optional(),
  allowChangeVote: z.boolean(),
  isAnonymous: z.boolean(),
  status: PollStatusSchema,
  publishedAt: z.coerce.date().optional().nullable(),
  endsAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  createdById: z.number().int(),
  roomId: z.number().int().optional().nullable(),
  options: z.lazy(() => OptionUncheckedCreateNestedManyWithoutPollInputObjectSchema).optional(),
  pollHashtags: z.lazy(() => PollHashtagUncheckedCreateNestedManyWithoutPollInputObjectSchema).optional(),
  pollTemplates: z.lazy(() => PollTemplateUncheckedCreateNestedManyWithoutPollInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutPollInputObjectSchema).optional(),
  childDependencies: z.lazy(() => PollDependencyUncheckedCreateNestedManyWithoutChildPollInputObjectSchema).optional()
}).strict();
export const PollUncheckedCreateWithoutVotesInputObjectSchema: z.ZodType<Prisma.PollUncheckedCreateWithoutVotesInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUncheckedCreateWithoutVotesInput>;
export const PollUncheckedCreateWithoutVotesInputObjectZodSchema = makeSchema();
