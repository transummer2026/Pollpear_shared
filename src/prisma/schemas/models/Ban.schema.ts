import * as z from 'zod';

export const BanSchema = z.object({
  id: z.number().int(),
  banReason: z.string(),
  unbanReason: z.string().nullish(),
  startedAt: z.date(),
  endedAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.number().int(),
  bannedById: z.number().int(),
  unbannedById: z.number().int().nullish(),
});

export type BanType = z.infer<typeof BanSchema>;
