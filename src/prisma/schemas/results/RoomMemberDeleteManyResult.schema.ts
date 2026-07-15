import * as z from 'zod';
export const RoomMemberDeleteManyResultSchema = z.object({
  count: z.number()
});