import { z } from "zod";
import { PollSchema } from "../prisma/schemas/models/Poll.schema";
import { OptionSchema } from "../prisma/schemas/models/Option.schema";
import { HashtagSchema } from "../prisma/schemas/models/Hashtag.schema";
import { PollTypeSchema } from "../prisma/schemas/enums/PollType.schema";

const emptyToUndefined = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((val) => (val === "" ? undefined : val), schema.optional());

export const PollDTOSchema = PollSchema.omit({
  id: true,
  createdAt: true,
  publishedAt: true,
  updatedAt: true,
  createdById: true,
  status: true,
  visibility : true,
});

const requiredLabel = OptionSchema.shape.label
  .min(1, "Label required")
  .max(255, "Max 255 characters");
const sliderLabel = emptyToUndefined(z.string().max(255, "Max 255 characters"));

const OptionBaseSchema = OptionSchema.omit({
  id: true,
  isDeleted: true,
  pollId: true,
  label: true,
  sliderLeftLabel: true,
  sliderRightLabel: true,
});

export const MultipleChoiceOptionInputSchema = OptionBaseSchema.extend({
  label: requiredLabel,
});

export const SliderOptionInputSchema = OptionBaseSchema.extend({
  label: requiredLabel,
  sliderLeftLabel: sliderLabel,
  sliderRightLabel: sliderLabel,
});

// Free field — creation
export const FreeFieldOptionInputSchema = OptionBaseSchema;

// Free field - add an answer
export const FreeFieldEditableOptionInputSchema = OptionBaseSchema.extend({
  label: sliderLabel,
});

export const OptionInputSchema = OptionSchema.omit({
  id: true,
  isDeleted: true,
  pollId: true,
}).extend({
  label: requiredLabel,
  sliderLeftLabel: sliderLabel,
  sliderRightLabel: sliderLabel,
});


export const HashtagInputSchema = HashtagSchema.omit({
  id: true,
  isVisible: true,
}).extend({
  name: HashtagSchema.shape.name
    .min(1, "Name required")
    .max(255, "Max 255 characters"),
});


const pollCreationBase = {
  ...PollDTOSchema.shape,
  title: PollSchema.shape.title
    .min(5, "Min 5 characters")
    .max(255, "Max 255 characters"),
  description: z.string().max(2048, "Description too long").nullish(),
  endsAt: z.coerce
    .date({ error: "Choose an end date" })
    .min(new Date(), { error: "End date must be in the future" }),
  allowChangeVote: z.boolean(),
  isAnonymous: z.boolean(),
  hashtags: z.array(HashtagInputSchema),
};

//Default PollCreationSchema with a différent Option Schema depending on the user's poll format choice
export const PollCreationSchema = z.discriminatedUnion("type", [
  z.object({
    ...pollCreationBase,
    type: z.literal("multiple_choice"),
    options: z
      .array(MultipleChoiceOptionInputSchema)
      .min(2, "Min 2 options"),
  }),
  z.object({
    ...pollCreationBase,
    type: z.literal("single_choice"),
    options: z
      .array(MultipleChoiceOptionInputSchema)
      
      .min(2, "Min 2 options"),
  }),
  z.object({
    ...pollCreationBase,
    type: z.literal("slider"),
    options: z.array(SliderOptionInputSchema).length(1, "Un slider = une option"),
  }),
  z.object({
    ...pollCreationBase,
    type: z.literal("free_field"),
    options: z.array(FreeFieldOptionInputSchema),
  }),
]);

export const PollModificationSchema = z
  .object({
    ...PollDTOSchema.shape,
    title: emptyToUndefined(
      PollSchema.shape.title
        .min(5, "Min 5 characters")
        .max(255, "Max 255 characters")
    ),
    description: emptyToUndefined(z.string().max(2048, "Description too long")),
    type: PollTypeSchema.optional(),
    endsAt: emptyToUndefined(
      z.coerce
        .date()
        .min(new Date(), { error: "End date must be in the future" })
    ),
    allowChangeVote: z.boolean().optional(),
    isAnonymous: z.boolean().optional(),
    options: z.array(OptionInputSchema).optional(),
    hashtags: z.array(HashtagInputSchema).optional(),
  })
  .partial();

export type PollDTO = z.infer<typeof PollDTOSchema>;
export type OptionInputDTO = z.infer<typeof OptionInputSchema>;
export type MultipleChoiceOptionInputDTO = z.infer<
  typeof MultipleChoiceOptionInputSchema
>;
export type SliderOptionInputDTO = z.infer<typeof SliderOptionInputSchema>;
export type FreeFieldOptionInputDTO = z.infer<typeof FreeFieldOptionInputSchema>;
export type FreeFieldEditableOptionInputDTO = z.infer<
  typeof FreeFieldEditableOptionInputSchema
>;
export type PollCreationInput = z.input<typeof PollCreationSchema>;
export type PollCreationDTO = z.output<typeof PollCreationSchema>;
export type PollModificationInput = z.input<typeof PollModificationSchema>;
export type PollModificationDTO = z.output<typeof PollModificationSchema>;
