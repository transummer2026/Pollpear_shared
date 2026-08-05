import { z } from "zod";
import { BanSchema } from "../prisma/schemas/models/Ban.schema";

export const BanCreationDTOSchema = BanSchema.pick({
  banReason: true,
  bannedAt: true,
  bannedById: true,
  unbannedAt: true,
  userId: true,
}).extend({
  banReason: z.string().min(3),
  bannedAt: z.iso.date(),
  bannedById: z.coerce.number(),
  unbannedAt: z.coerce.date(),
  userId: z.coerce.number(),
});

export const BanUpdateDTOSchema = BanSchema.pick({
  banReason: true,
  bannedAt: true,
  unbannedAt: true,
  unbanReason: true,
}).extend({
  banReason: z.string().min(3).optional(),
  bannedAt: z.iso.date().optional(),
  unbannedAt: z.iso.date().optional(),
  unbanReason: z.string().optional(),
});

