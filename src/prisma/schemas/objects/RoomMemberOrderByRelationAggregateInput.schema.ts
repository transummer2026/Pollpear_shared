import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const RoomMemberOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.RoomMemberOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberOrderByRelationAggregateInput>;
export const RoomMemberOrderByRelationAggregateInputObjectZodSchema = makeSchema();
