import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  pollId: SortOrderSchema.optional(),
  hashtagId: SortOrderSchema.optional()
}).strict();
export const PollHashtagMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PollHashtagMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagMinOrderByAggregateInput>;
export const PollHashtagMinOrderByAggregateInputObjectZodSchema = makeSchema();
