import { z } from "zod";
import { VisibilitySchema } from "../prisma/schemas/enums/Visibility.schema";
import { PollTypeSchema } from "../prisma/schemas/enums/PollType.schema";
import { PollStatusSchema } from "../prisma/schemas/enums/PollStatus.schema";
import { HashtagSchema } from "../prisma/schemas/models/Hashtag.schema";
import { PollDependencySchema } from "../prisma/schemas/models/PollDependency.schema";
import {
  MultipleChoiceOptionInputSchema,
  SliderOptionInputSchema,
  FreeFieldOptionInputSchema,
} from "./option.schema";

export {
  MultipleChoiceOptionInputSchema,
  SliderOptionInputSchema,
  FreeFieldOptionInputSchema,
} from "./option.schema";

/**
 * hashtags (if present) must be an array of objects each containing a hashtag name.
 * The service resolves each name to an existing Hashtag row or creates a new one
 * (connectOrCreate) - the client never sends a hashtagId directly.
 */
const pollCreationBase = {
  title: z.string().min(1, "Title required").max(255, "Max 255 characters"),
  description: z.string().max(3000, "Max 3000 characters").optional().nullable(),
  endsAt: z.coerce.date().refine(
    (val) => val >= new Date(),
    { message: "Date cannot be in the past" }
  ),
  visibility: VisibilitySchema.default("private"),
  allowChangeVote: z.boolean(),
  isAnonymous: z.boolean(),
  status: PollStatusSchema.default("pending"),
  roomId: z.number().optional(),
  hashtags: z.array(HashtagSchema.pick({ name: true })).optional(),
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
export const PollCreationSchema = z.discriminatedUnion("type", [
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
    options: z.array(SliderOptionInputSchema).length(2, "A slider poll needs exactly 2 options"),
  }),
]);

/**
 * We decided the type of a poll cannot be updated (once someone creates as multiple choice
 * it stays that way else it would be complicated). Since the discriminated union is based
 * on type, the "parse according to the option type" will live in poll.service.ts (TODO).
 */
export const PollUpdateSchema = z.object({
  title: z.string().max(255, "Max 255 characters"),
  description: z.string().max(3000, "Max 3000 characters").nullable(),
  endsAt: z.coerce.date().refine(
    (val) => val >= new Date(),
    { message: "Date cannot be in the past" }
  ),
  visibility: VisibilitySchema,
  allowChangeVote: z.boolean(),
  isAnonymous: z.boolean(),
  status: PollStatusSchema,
  roomId: z.number(),
  options: z.array(z.union([MultipleChoiceOptionInputSchema, SliderOptionInputSchema, FreeFieldOptionInputSchema])),
  hashtags: z.array(HashtagSchema.pick({ name: true })),
  childDependencies: z.array(PollDependencySchema.pick({ optionId: true })),
}).partial();

/**
 * These are the search query options to find a poll.
 */
export const PollQuerySchema = z.object({
  title: z.string().max(255, "Max 255 characters").optional(),
  type: PollTypeSchema.optional(),
  visibility: VisibilitySchema.optional(),
  status: PollStatusSchema.optional(),
  roomId: z.number().optional(),
  createdById: z.number().optional(),
  hashtagIds: z.array(z.number()).optional(),
});

export type PollCreationDTO = z.infer<typeof PollCreationSchema>;
export type PollUpdateDTO = z.infer<typeof PollUpdateSchema>;
export type PollQueryDTO = z.infer<typeof PollQuerySchema>;
