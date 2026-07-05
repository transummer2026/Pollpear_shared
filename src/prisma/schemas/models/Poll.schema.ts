import * as z from "zod";
import { PollStatusSchema } from "../enums/PollStatus.schema";
import { PollTypeSchema } from "../enums/PollType.schema";
import { VisibilitySchema } from "../enums/Visibility.schema";

export const PollSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().nullish(),
  type: PollTypeSchema,
  createdAt: z.date(),
  publishedAt: z.date().nullish(),
  updatedAt: z.date(),
  endsAt: z.date(),
  visibility: VisibilitySchema,
  allowChangeVote: z.boolean(),
  isAnonymous: z.boolean(),
  status: PollStatusSchema,
  createdById: z.number().int(),
  roomId: z.number().int().nullish(),
});

export type PollType = z.infer<typeof PollSchema>;
