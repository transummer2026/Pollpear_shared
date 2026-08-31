import { z } from 'zod';
import { PollSchema as PollModelSchema } from '../prisma/schemas/models/Poll.schema';
import { VisibilitySchema } from '../prisma/schemas/enums/Visibility.schema';
import { PollTypeSchema } from '../prisma/schemas/enums/PollType.schema';
import { PollStatusSchema } from '../prisma/schemas/enums/PollStatus.schema';
import { unwrapNullish } from './utils';
import {
  ChoiceOptionSchema,
  ChoiceOptionUpdateSchema,
  OptionCountVoteSchema,
  SliderOptionSchema,
  SliderOptionUpdateSchema,
} from './option.schema';
import { UserPublicProfileSchema } from './users.schema';
import { HashtagSchema } from './hashtag.schema';
import { PollHashtagSchema } from './poll-hashtag.schema';
import { RoomPublicSchema } from './rooms.schema';
import { VoteSchema as VoteModelSchema } from '../prisma/schemas/models/Vote.schema';

/**
 * Fields common to creating and updating a poll. Not exported: callers go
 * through PollCreateSchema or PollUpdateSchema, which add the `options` rule
 * that depends on the poll type.
 *
 * `hashtags` carries names, never ids - the service resolves each name to an
 * existing Hashtag row or creates one (connectOrCreate), so the client does
 * not have to look anything up first. `roomId` being absent means a
 * standalone poll.
 */
const PollSchema = z.object({
  title: PollModelSchema.shape.title
    .min(1, 'Title required')
    .max(255, 'Max 255 characters'),
  description: unwrapNullish(PollModelSchema.shape.description)
    .max(3000, 'Max 3000 characters')
    .nullish(),
  endsAt: z.coerce.date().refine((val) => val >= new Date(), {
    message: 'Date cannot be in the past',
  }),
  visibility: PollModelSchema.shape.visibility,
  allowChangeVote: PollModelSchema.shape.allowChangeVote,
  isAnonymous: PollModelSchema.shape.isAnonymous,
  roomId: unwrapNullish(PollModelSchema.shape.roomId).optional(),
  hashtags: z.array(HashtagSchema.pick({ name: true })).optional(),
});

/**
 * How many options a poll may carry depends entirely on its type, so this is a
 * discriminated union on `type` rather than one object with a cross-field
 * `.refine()`. Two things fall out of that: the error is reported on
 * `options`, where the user can act on it, instead of at the root of the form,
 * and `PollCreateDTO` narrows to the matching option shape as soon as `type`
 * is checked.
 *
 * The two choice variants enforce the same rule but stay separate members so
 * each literal survives into the inferred type.
 */
export const PollCreateSchema = z.discriminatedUnion('type', [
  PollSchema.extend({
    type: z.literal('multiple_choice'),
    options: z.array(ChoiceOptionSchema).min(2, 'Min 2 options'),
  }),
  PollSchema.extend({
    type: z.literal('single_choice'),
    options: z.array(ChoiceOptionSchema).min(2, 'Min 2 options'),
  }),
  PollSchema.extend({
    type: z.literal('slider'),
    options: z
      .array(SliderOptionSchema)
      .length(1, 'A slider poll needs exactly 1 option'),
  }),
]);

/**
 * A poll as the API hands it back: the full row, the relations the read
 * endpoint joins in, and four values the server computes rather than stores -
 * `hasVoted` (for the caller), `sliderResult` (average of the slider votes),
 * `voterCount`, and the per-option tallies inside `options`.
 */
export const PollReadSchema = PollModelSchema.extend({
  createdBy: UserPublicProfileSchema.nullable(),
  options: z.array(OptionCountVoteSchema),
  pollHashtags: z.array(PollHashtagSchema.extend({ hashtag: HashtagSchema })),
  room: z.lazy(() => RoomPublicSchema).nullable(),
  hasVoted: z.boolean(),
  votes: z.array(VoteModelSchema.omit({ createdById: true })),
  sliderResult: z.number(),
  voterCount: z.number(),
});

/**
 * A poll's type is fixed at creation: votes are already counted against a
 * shape, and switching it would leave them meaningless. `type` is still
 * required here purely as the discriminant - it tells the union which
 * `options` rule to apply (at least 2 for a choice poll, exactly 1 for a
 * slider) and the service strips it back out before writing.
 *
 * Everything inherited from the base is `.partial()` since this is a PATCH.
 */
const PollUpdateBaseSchema = PollSchema.partial();

export const PollUpdateSchema = z.discriminatedUnion('type', [
  PollUpdateBaseSchema.extend({
    type: z.literal('multiple_choice'),
    options: ChoiceOptionUpdateSchema.optional(),
  }),
  PollUpdateBaseSchema.extend({
    type: z.literal('single_choice'),
    options: ChoiceOptionUpdateSchema.optional(),
  }),
  PollUpdateBaseSchema.extend({
    type: z.literal('slider'),
    options: SliderOptionUpdateSchema.optional(),
  }),
]);

/**
 * Filters accepted by the poll listing endpoint; every field is optional and
 * an absent one means "no filter on this".
 *
 * Note the asymmetry with create: here hashtags are given as resolved
 * `hashtagIds`, because filtering matches rows that already exist and must
 * never create one as a side effect of a search.
 */
export const PollQuerySchema = z.object({
  title: PollModelSchema.shape.title.max(255, 'Max 255 characters').optional(),
  type: PollTypeSchema.optional(),
  visibility: VisibilitySchema.optional(),
  status: PollStatusSchema.optional(),
  roomId: unwrapNullish(PollModelSchema.shape.roomId).optional(),
  createdById: PollModelSchema.shape.createdById.optional(),
  hashtagIds: z.array(HashtagSchema.shape.id).optional(),
});

export type PollCreateDTO = z.infer<typeof PollCreateSchema>;
export type PollUpdateDTO = z.infer<typeof PollUpdateSchema>;
export type PollQueryDTO = z.infer<typeof PollQuerySchema>;
export type PollReadDTO = z.infer<typeof PollReadSchema>;
