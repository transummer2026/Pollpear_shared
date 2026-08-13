import * as z from 'zod';
export const PollFindManyResultSchema = z.object({
  data: z.array(z.object({
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
  pollHashtags: z.array(z.unknown()),
  pollTemplates: z.array(z.unknown()),
  reports: z.array(z.unknown()),
  childDependencies: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});