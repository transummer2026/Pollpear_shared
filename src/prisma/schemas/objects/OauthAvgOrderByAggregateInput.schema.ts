import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const OauthAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OauthAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OauthAvgOrderByAggregateInput>;
export const OauthAvgOrderByAggregateInputObjectZodSchema = makeSchema();
