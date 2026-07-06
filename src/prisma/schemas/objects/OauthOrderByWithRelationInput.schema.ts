import * as z from "zod";
import type { Prisma } from "../../../../../src/generated/prisma/client";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      provider: SortOrderSchema.optional(),
      providerUserId: SortOrderSchema.optional(),
      providerUrl: SortOrderSchema.optional(),
      accessToken: SortOrderSchema.optional(),
      refreshToken: SortOrderSchema.optional(),
      tokenType: SortOrderSchema.optional(),
      expiresAt: SortOrderSchema.optional(),
      scope: SortOrderSchema.optional(),
      grantType: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      userId: SortOrderSchema.optional(),
      user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    })
    .strict();
export const OauthOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OauthOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.OauthOrderByWithRelationInput>;
export const OauthOrderByWithRelationInputObjectZodSchema = makeSchema();
