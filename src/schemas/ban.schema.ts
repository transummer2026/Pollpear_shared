import { z } from "zod";
import type { BanUncheckedCreateInputObjectSchema } from "../prisma/schemas/objects/BanUncheckedCreateInput.schema";
import type { BanUpdateInputObjectSchema } from "../prisma/schemas/objects/BanUpdateInput.schema";

export const BanCreationDTOSchema = z.object({
  banReason: z.string().min(3),
  bannedAt: z.iso.date(),
  bannedById: z.coerce.number(),
  unbannedAt: z.coerce.date(),
  userId: z.coerce.number(),
}) satisfies z.ZodType<z.infer<typeof BanUncheckedCreateInputObjectSchema>>;

export const BanUpdateDTOSchema = z.object({
  banReason: z.string().min(3).optional(),
  bannedAt: z.iso.date().optional(),
  unbannedAt: z.iso.date().optional(),
  unbanReason: z.string().optional(),
}) satisfies z.ZodType<z.infer<typeof BanUpdateInputObjectSchema>>;

