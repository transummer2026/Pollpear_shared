import * as z from 'zod';

export const VoteSchema = z.object({
  id: z.number().int(),
  freeField: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
  createdById: z.number().int(),
  pollId: z.number().int(),
});

export type VoteType = z.infer<typeof VoteSchema>;
