import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
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
  userId: SortOrderSchema.optional()
}).strict();
export const OauthMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OauthMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OauthMaxOrderByAggregateInput>;
export const OauthMaxOrderByAggregateInputObjectZodSchema = makeSchema();
