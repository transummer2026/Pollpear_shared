import { z } from "zod";
import { VisibilitySchema } from "../prisma/schemas/enums/Visibility.schema";
import { PollTypeSchema } from "../prisma/schemas/enums/PollType.schema";
import { PollStatusSchema } from "../prisma/schemas/enums/PollStatus.schema";
import { PollHashtagSchema } from "../prisma/schemas/models/PollHashtag.schema";
import { OptionSchema } from "../prisma/schemas/models/Option.schema";
import { PollTemplateSchema } from "../prisma/schemas/models/PollTemplate.schema";
import { PollDependencySchema } from "../prisma/schemas/models/PollDependency.schema";
import { VoteOptionSchema } from "../prisma/schemas/models/VoteOption.schema";

const OptionBaseSchema = OptionSchema.omit({
  id: true,
  isDeleted: true,
  pollId: true,
  label: true,
  sliderLeftLabel: true,
  sliderRightLabel: true,
});

const requiredLabel = OptionSchema.shape.label
  .min(1, "Label required")
  .max(255, "Max 255 characters");

const emptyToUndefined = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((val) => (val === "" ? undefined : val), schema.optional());

const sliderLabel = emptyToUndefined(z.string().max(255, "Max 255 characters"));

export const MultipleChoiceOptionInputSchema = OptionBaseSchema.extend({
  label: requiredLabel,
});

export const SliderOptionInputSchema = OptionBaseSchema.extend({
  label: requiredLabel,
  sliderLeftLabel: sliderLabel,
  sliderRightLabel: sliderLabel,
});

export const FreeFieldOptionInputSchema = OptionBaseSchema;

/**
 * PollHashtag produces a new object which only includes the hashtagId and not the PollId
 * because the PollId is implicit. 
 * 
 * Pollhashtag (if present) must be an array and each element of that array must be an object
 * that contains hashtagId
 */
const pollCreationBase = {
  title: z.string().max(255),
  description: z.string().max(3000).optional().nullable(),
  endsAt: z.coerce.date().refine(
  (val) => val >= new Date(),
  { message: "Date cannot be in the past" }),
  visibility: VisibilitySchema.default("private"),
  allowChangeVote: z.boolean(),
  isAnonymous: z.boolean(),
  status: PollStatusSchema.default("pending"),
  roomId: z.number().optional(),
  pollHashtags: z.array(PollHashtagSchema.pick( { hashtagId: true })).optional(), // pollId is implicit and not here
  pollTemplates: z.array(PollTemplateSchema.pick( { userId: true })).optional(),
  childDependencies: z.array(PollDependencySchema.pick({ optionId: true })).optional(),
};

/**
 * Here we use a discriminated union where all the options in the union are object
 * schemas that share a particular key (in this case type). Based on the value of the 
 * discriminator key, typescript is able to "narrow" the type signature.
 * The discriminator corresponds to a literal value.
 * ...PollCreationBase means that it takes the schema above as base and then it adds
 * the option as per the type as seen below.
 */
export const PollCreationDTOSchema = z.discriminatedUnion("type", [
  z.object({
    ...pollCreationBase,
    type: z.literal("multiple_choice"),
    options: z.array(MultipleChoiceOptionInputSchema).min(2, "Min 2 options"),
  }),
  z.object({
    ...pollCreationBase,
    type: z.literal("single_choice"),
    options: z.array(MultipleChoiceOptionInputSchema).min(2, "Min 2 options"),
  }),
  z.object({
    ...pollCreationBase,
    type: z.literal("slider"),
    options: z.array(SliderOptionInputSchema).length(1, "A slider poll needs exactly 1 option"),
  }),
  z.object({
    ...pollCreationBase,
    type: z.literal("free_field"),
    options: z.array(FreeFieldOptionInputSchema),
  }),
]);

/**
 * We decided the type of a poll cannot be updated (once someone creates as multiple choice
 * it stays that way else it would be complicated). Since the discriminated union is based
 * on type, the "parse according to the option type" will live in poll.service.ts (TODO).
 */
export const PollUpdateDTOSchema = z.object({
  title: z.string().max(255).optional(),
  description: z.string().max(3000).optional().nullable(),
  endsAt: z.coerce.date().refine(
  (val) => val >= new Date(),
  { message: "Date cannot be in the past" }).optional(),
  visibility: VisibilitySchema.optional(),
  allowChangeVote: z.boolean().optional(),
  isAnonymous: z.boolean().optional(),
  status: PollStatusSchema.optional(),
  roomId: z.number().optional(),
  options: z.array(z.union([MultipleChoiceOptionInputSchema, SliderOptionInputSchema, FreeFieldOptionInputSchema])).optional(),
  pollHashtags: z.array(PollHashtagSchema.pick( { hashtagId: true })).optional(), // pollId is implicit and not here
  pollTemplates: z.array(PollTemplateSchema.pick( { userId: true })).optional(),
  childDependencies: z.array(PollDependencySchema.pick({ optionId: true })).optional(),
});

/**
 * These are the search query options to find a poll.
 */
export const PollQueryDTOSchema = z.object({
  title: z.string().max(255).optional(),
  type: PollTypeSchema.optional(),
  visibility: VisibilitySchema.optional(),
  status: PollStatusSchema.optional(),
  roomId: z.number().optional(), // maybe room title
  createdById: z.number().optional(),
  hashtagIds: z.array(z.number()).optional(), // pollId is implicit and not here
});

export type PollCreationDTO = z.infer<typeof PollCreationDTOSchema>;
export type PollUpdateDTO = z.infer<typeof PollUpdateDTOSchema>;
export type PollQueryDTOSchema = z.infer<typeof PollQueryDTOSchema>;
