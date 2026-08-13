import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTypeSchema } from '../enums/PollType.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { PollStatusSchema } from '../enums/PollStatus.schema';
import { UserCreateNestedOneWithoutPollsCreatedInputObjectSchema as UserCreateNestedOneWithoutPollsCreatedInputObjectSchema } from './UserCreateNestedOneWithoutPollsCreatedInput.schema';
import { RoomCreateNestedOneWithoutPollsInputObjectSchema as RoomCreateNestedOneWithoutPollsInputObjectSchema } from './RoomCreateNestedOneWithoutPollsInput.schema';
import { VoteCreateNestedManyWithoutPollInputObjectSchema as VoteCreateNestedManyWithoutPollInputObjectSchema } from './VoteCreateNestedManyWithoutPollInput.schema';
import { OptionCreateNestedManyWithoutPollInputObjectSchema as OptionCreateNestedManyWithoutPollInputObjectSchema } from './OptionCreateNestedManyWithoutPollInput.schema';
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
  createdBy: z.lazy(() => UserCreateNestedOneWithoutPollsCreatedInputObjectSchema),
  room: z.lazy(() => RoomCreateNestedOneWithoutPollsInputObjectSchema).optional(),
  votes: z.lazy(() => VoteCreateNestedManyWithoutPollInputObjectSchema).optional(),
  options: z.lazy(() => OptionCreateNestedManyWithoutPollInputObjectSchema).optional(),
  pollTemplates: z.lazy(() => PollTemplateCreateNestedManyWithoutPollInputObjectSchema).optional(),
  reports: z.lazy(() => ReportCreateNestedManyWithoutPollInputObjectSchema).optional(),
  childDependencies: z.lazy(() => PollDependencyCreateNestedManyWithoutChildPollInputObjectSchema).optional()
}).strict();
export const PollCreateWithoutPollHashtagsInputObjectSchema: z.ZodType<Prisma.PollCreateWithoutPollHashtagsInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateWithoutPollHashtagsInput>;
export const PollCreateWithoutPollHashtagsInputObjectZodSchema = makeSchema();
