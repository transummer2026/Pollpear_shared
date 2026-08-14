import { z } from 'zod';
import { PollSchema as PollModelSchema } from '../prisma/schemas/models/Poll.schema';
import { VisibilitySchema } from '../prisma/schemas/enums/Visibility.schema';
import { PollTypeSchema } from '../prisma/schemas/enums/PollType.schema';
import { PollStatusSchema } from '../prisma/schemas/enums/PollStatus.schema';
import { unwrapNullish } from './utils';
import {
  ChoiceOptionSchema,
  ChoiceOptionUpdateSchema,
  OptionModelSchema,
  SliderOptionSchema,
  SliderOptionUpdateSchema,
} from './option.schema';
import { UserPublicProfileSchema } from './users.schema';
import { HashtagSchema } from './hashtag.schema';
import { PollHashtagSchema } from './poll-hashtag.schema';
import { RoomSchema } from './rooms.schema';
import { VoteSchema as VoteModelSchema } from '../prisma/schemas/models/Vote.schema';

/**
 * hashtags (if present) must be an array of objects each containing a hashtag name.
 * The service resolves each name to an existing Hashtag row or creates a new one
 * (connectOrCreate) - the client never sends a hashtagId directly.
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
 * Here we use a discriminated
 *
 *  union where all the options in the union are object
 * schemas that share a particular key (in this case type). Based on the value of the
 * discriminator key, typescript is able to "narrow" the type signature.
 * The discriminator corresponds to a literal value.
 * ...PollSchema means that it takes the schema above as base and then it adds
 * the option as per the type as seen below.
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

export const PollReadSchema = PollModelSchema.extend({
  createdBy: UserPublicProfileSchema,
  options: z.array(OptionModelSchema),
  pollHashtags: z.array(PollHashtagSchema.extend({ hashtag: HashtagSchema })),
  room: RoomSchema.nullable(),
  votes: z.array(VoteModelSchema),
});

/**
 * We decided the type of a poll cannot be updated (once someone creates as multiple choice
 * it stays that way else it would be complicated). type is only present here to discriminate
 * which options constraint applies (min 2 for choice, exactly 1 for slider) - the service
 * strips it back out before writing to the db.
 */
const PollUpdateBaseSchema = z
  .object({
    title: PollModelSchema.shape.title.max(255, 'Max 255 characters'),
    description: unwrapNullish(PollModelSchema.shape.description)
      .max(3000, 'Max 3000 characters')
      .nullable(),
    endsAt: z.coerce.date().refine((val) => val >= new Date(), {
      message: 'Date cannot be in the past',
    }),
    visibility: PollModelSchema.shape.visibility.unwrap(),
    allowChangeVote: PollModelSchema.shape.allowChangeVote,
    isAnonymous: PollModelSchema.shape.isAnonymous,
    roomId: unwrapNullish(PollModelSchema.shape.roomId),
    hashtags: z.array(HashtagSchema.pick({ name: true })),
  })
  .partial();

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
 * These are the search query options to find a poll.
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
