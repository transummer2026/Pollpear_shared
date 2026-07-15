import * as z from 'zod';
export const PollDependencyFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  childPollId: z.number().int(),
  optionId: z.number().int(),
  childPoll: z.unknown(),
  option: z.unknown()
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