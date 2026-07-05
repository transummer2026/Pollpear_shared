import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      blockerId: SortOrderSchema.optional(),
      blockedId: SortOrderSchema.optional(),
      blocker: z
        .lazy(() => UserOrderByWithRelationInputObjectSchema)
        .optional(),
      blocked: z
        .lazy(() => UserOrderByWithRelationInputObjectSchema)
        .optional(),
    })
    .strict();
export const BlockOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BlockOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.BlockOrderByWithRelationInput>;
export const BlockOrderByWithRelationInputObjectZodSchema = makeSchema();
