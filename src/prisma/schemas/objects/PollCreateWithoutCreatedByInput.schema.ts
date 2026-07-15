import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTypeSchema } from '../enums/PollType.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { PollStatusSchema } from '../enums/PollStatus.schema';
import { RoomCreateNestedOneWithoutPollsInputObjectSchema as RoomCreateNestedOneWithoutPollsInputObjectSchema } from './RoomCreateNestedOneWithoutPollsInput.schema';
import { OptionCreateNestedManyWithoutPollInputObjectSchema as OptionCreateNestedManyWithoutPollInputObjectSchema } from './OptionCreateNestedManyWithoutPollInput.schema';
import { PollHashtagCreateNestedManyWithoutPollInputObjectSchema as PollHashtagCreateNestedManyWithoutPollInputObjectSchema } from './PollHashtagCreateNestedManyWithoutPollInput.schema';
import { PollTemplateCreateNestedManyWithoutPollInputObjectSchema as PollTemplateCreateNestedManyWithoutPollInputObjectSchema } from './PollTemplateCreateNestedManyWithoutPollInput.schema';
import { ReportCreateNestedManyWithoutPollInputObjectSchema as ReportCreateNestedManyWithoutPollInputObjectSchema } from './ReportCreateNestedManyWithoutPollInput.schema';
import { PollDependencyCreateNestedManyWithoutChildPollInputObjectSchema as PollDependencyCreateNestedManyWithoutChildPollInputObjectSchema } from './PollDependencyCreateNestedManyWithoutChildPollInput.schema'

const makeSchema = () => z.object({
  title: z.string().max(255),
  description: z.string().optional().nullable(),
  type: PollTypeSchema,
  createdAt: z.coerce.date().optional(),
  publishedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  endsAt: z.coerce.date(),
  visibility: VisibilitySchema,
  allowChangeVote: z.boolean(),
  isAnonymous: z.boolean(),
  status: PollStatusSchema,
  room: z.lazy(() => RoomCreateNestedOneWithoutPollsInputObjectSchema).optional(),
  options: z.lazy(() => OptionCreateNestedManyWithoutPollInputObjectSchema).optional(),
  pollHashtags: z.lazy(() => PollHashtagCreateNestedManyWithoutPollInputObjectSchema).optional(),
  pollTemplates: z.lazy(() => PollTemplateCreateNestedManyWithoutPollInputObjectSchema).optional(),
  reports: z.lazy(() => ReportCreateNestedManyWithoutPollInputObjectSchema).optional(),
  childDependencies: z.lazy(() => PollDependencyCreateNestedManyWithoutChildPollInputObjectSchema).optional()
}).strict();
export const PollCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PollCreateWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateWithoutCreatedByInput>;
export const PollCreateWithoutCreatedByInputObjectZodSchema = makeSchema();
