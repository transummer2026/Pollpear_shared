import * as z from 'zod';
export const RoomMemberCreateManyResultSchema = z.object({
  count: z.number()
});