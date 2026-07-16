import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OauthCountOrderByAggregateInputObjectSchema as OauthCountOrderByAggregateInputObjectSchema } from './OauthCountOrderByAggregateInput.schema';
import { OauthAvgOrderByAggregateInputObjectSchema as OauthAvgOrderByAggregateInputObjectSchema } from './OauthAvgOrderByAggregateInput.schema';
import { OauthMaxOrderByAggregateInputObjectSchema as OauthMaxOrderByAggregateInputObjectSchema } from './OauthMaxOrderByAggregateInput.schema';
import { OauthMinOrderByAggregateInputObjectSchema as OauthMinOrderByAggregateInputObjectSchema } from './OauthMinOrderByAggregateInput.schema';
import { OauthSumOrderByAggregateInputObjectSchema as OauthSumOrderByAggregateInputObjectSchema } from './OauthSumOrderByAggregateInput.schema'

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
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => OauthCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => OauthAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OauthMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OauthMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => OauthSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OauthOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OauthOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.OauthOrderByWithAggregationInput>;
export const OauthOrderByWithAggregationInputObjectZodSchema = makeSchema();
