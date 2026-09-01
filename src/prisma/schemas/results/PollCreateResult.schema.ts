import * as z from 'zod';
export const PollCreateResultSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().optional(),
  type: z.unknown(),
  visibility: z.unknown(),
  allowChangeVote: z.boolean(),
  isAnonymous: z.boolean(),
  status: z.unknown(),
  publishedAt: z.date().optional(),
  endsAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  createdById: z.number().int(),
  roomId: z.number().int().optional(),
  createdBy: z.unknown(),
  room: z.unknown().optional(),
  votes: z.array(z.unknown()),
  options: z.array(z.unknown()),
  pollHashtags: z.array(z.unknown())
});