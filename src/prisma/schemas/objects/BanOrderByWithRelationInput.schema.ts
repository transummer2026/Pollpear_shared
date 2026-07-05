import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from "./SortOrderInput.schema";
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";
import { BanAttachmentOrderByRelationAggregateInputObjectSchema as BanAttachmentOrderByRelationAggregateInputObjectSchema } from "./BanAttachmentOrderByRelationAggregateInput.schema";

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      banReason: SortOrderSchema.optional(),
      bannedAt: SortOrderSchema.optional(),
      unbannedAt: SortOrderSchema.optional(),
      unbanReason: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      userId: SortOrderSchema.optional(),
      bannedById: SortOrderSchema.optional(),
      unbannedById: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
      bannedBy: z
        .lazy(() => UserOrderByWithRelationInputObjectSchema)
        .optional(),
      unbannedBy: z
        .lazy(() => UserOrderByWithRelationInputObjectSchema)
        .optional(),
      attachments: z
        .lazy(() => BanAttachmentOrderByRelationAggregateInputObjectSchema)
        .optional(),
    })
    .strict();
export const BanOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BanOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.BanOrderByWithRelationInput>;
export const BanOrderByWithRelationInputObjectZodSchema = makeSchema();
