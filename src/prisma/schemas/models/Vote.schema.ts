import * as z from "zod";

export const VoteSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  label: z.string().nullish(),
  createdById: z.number().int(),
});

export type VoteType = z.infer<typeof VoteSchema>;
