import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTypeSchema } from '../enums/PollType.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { PollStatusSchema } from '../enums/PollStatus.schema';
import { UserCreateNestedOneWithoutPollsCreatedInputObjectSchema as UserCreateNestedOneWithoutPollsCreatedInputObjectSchema } from './UserCreateNestedOneWithoutPollsCreatedInput.schema';
import { RoomCreateNestedOneWithoutPollsInputObjectSchema as RoomCreateNestedOneWithoutPollsInputObjectSchema } from './RoomCreateNestedOneWithoutPollsInput.schema';
import { OptionCreateNestedManyWithoutPollInputObjectSchema as OptionCreateNestedManyWithoutPollInputObjectSchema } from './OptionCreateNestedManyWithoutPollInput.schema';
import { PollHashtagCreateNestedManyWithoutPollInputObjectSchema as PollHashtagCreateNestedManyWithoutPollInputObjectSchema } from './PollHashtagCreateNestedManyWithoutPollInput.schema';
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
  options: z.lazy(() => OptionCreateNestedManyWithoutPollInputObjectSchema).optional(),
  pollHashtags: z.lazy(() => PollHashtagCreateNestedManyWithoutPollInputObjectSchema).optional(),
  reports: z.lazy(() => ReportCreateNestedManyWithoutPollInputObjectSchema).optional(),
  childDependencies: z.lazy(() => PollDependencyCreateNestedManyWithoutChildPollInputObjectSchema).optional()
}).strict();
export const PollCreateWithoutPollTemplatesInputObjectSchema: z.ZodType<Prisma.PollCreateWithoutPollTemplatesInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateWithoutPollTemplatesInput>;
export const PollCreateWithoutPollTemplatesInputObjectZodSchema = makeSchema();
