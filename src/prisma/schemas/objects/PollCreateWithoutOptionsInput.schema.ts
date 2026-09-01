import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTypeSchema } from '../enums/PollType.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { PollStatusSchema } from '../enums/PollStatus.schema';
import { UserCreateNestedOneWithoutPollsCreatedInputObjectSchema as UserCreateNestedOneWithoutPollsCreatedInputObjectSchema } from './UserCreateNestedOneWithoutPollsCreatedInput.schema';
import { RoomCreateNestedOneWithoutPollsInputObjectSchema as RoomCreateNestedOneWithoutPollsInputObjectSchema } from './RoomCreateNestedOneWithoutPollsInput.schema';
import { VoteCreateNestedManyWithoutPollInputObjectSchema as VoteCreateNestedManyWithoutPollInputObjectSchema } from './VoteCreateNestedManyWithoutPollInput.schema';
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
  votes: z.lazy(() => VoteCreateNestedManyWithoutPollInputObjectSchema).optional(),
  pollHashtags: z.lazy(() => PollHashtagCreateNestedManyWithoutPollInputObjectSchema).optional()
}).strict();
export const PollCreateWithoutOptionsInputObjectSchema: z.ZodType<Prisma.PollCreateWithoutOptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateWithoutOptionsInput>;
export const PollCreateWithoutOptionsInputObjectZodSchema = makeSchema();
