import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTypeSchema } from '../enums/PollType.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { PollStatusSchema } from '../enums/PollStatus.schema';
import { VoteUncheckedCreateNestedManyWithoutPollInputObjectSchema as VoteUncheckedCreateNestedManyWithoutPollInputObjectSchema } from './VoteUncheckedCreateNestedManyWithoutPollInput.schema';
import { OptionUncheckedCreateNestedManyWithoutPollInputObjectSchema as OptionUncheckedCreateNestedManyWithoutPollInputObjectSchema } from './OptionUncheckedCreateNestedManyWithoutPollInput.schema';
import { PollHashtagUncheckedCreateNestedManyWithoutPollInputObjectSchema as PollHashtagUncheckedCreateNestedManyWithoutPollInputObjectSchema } from './PollHashtagUncheckedCreateNestedManyWithoutPollInput.schema'

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
  roomId: z.number().int().optional().nullable(),
  votes: z.lazy(() => VoteUncheckedCreateNestedManyWithoutPollInputObjectSchema).optional(),
  options: z.lazy(() => OptionUncheckedCreateNestedManyWithoutPollInputObjectSchema).optional(),
  pollHashtags: z.lazy(() => PollHashtagUncheckedCreateNestedManyWithoutPollInputObjectSchema).optional()
}).strict();
export const PollUncheckedCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PollUncheckedCreateWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUncheckedCreateWithoutCreatedByInput>;
export const PollUncheckedCreateWithoutCreatedByInputObjectZodSchema = makeSchema();
