import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTypeSchema } from '../enums/PollType.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { PollStatusSchema } from '../enums/PollStatus.schema';
import { UserCreateNestedOneWithoutPollsCreatedInputObjectSchema as UserCreateNestedOneWithoutPollsCreatedInputObjectSchema } from './UserCreateNestedOneWithoutPollsCreatedInput.schema';
import { RoomCreateNestedOneWithoutPollsInputObjectSchema as RoomCreateNestedOneWithoutPollsInputObjectSchema } from './RoomCreateNestedOneWithoutPollsInput.schema';
import { OptionCreateNestedManyWithoutPollInputObjectSchema as OptionCreateNestedManyWithoutPollInputObjectSchema } from './OptionCreateNestedManyWithoutPollInput.schema';
import { PollHashtagCreateNestedManyWithoutPollInputObjectSchema as PollHashtagCreateNestedManyWithoutPollInputObjectSchema } from './PollHashtagCreateNestedManyWithoutPollInput.schema'

const makeSchema = () => z.object({
  title: z.string().max(255),
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
  createdBy: z.lazy(() => UserCreateNestedOneWithoutPollsCreatedInputObjectSchema),
  room: z.lazy(() => RoomCreateNestedOneWithoutPollsInputObjectSchema).optional(),
  options: z.lazy(() => OptionCreateNestedManyWithoutPollInputObjectSchema).optional(),
  pollHashtags: z.lazy(() => PollHashtagCreateNestedManyWithoutPollInputObjectSchema).optional()
}).strict();
export const PollCreateWithoutVotesInputObjectSchema: z.ZodType<Prisma.PollCreateWithoutVotesInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateWithoutVotesInput>;
export const PollCreateWithoutVotesInputObjectZodSchema = makeSchema();
