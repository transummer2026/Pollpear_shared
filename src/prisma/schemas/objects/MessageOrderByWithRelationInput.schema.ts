import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { RoomOrderByWithRelationInputObjectSchema as RoomOrderByWithRelationInputObjectSchema } from './RoomOrderByWithRelationInput.schema';
import { ReportOrderByRelationAggregateInputObjectSchema as ReportOrderByRelationAggregateInputObjectSchema } from './ReportOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  authorId: SortOrderSchema.optional(),
  roomId: SortOrderSchema.optional(),
  author: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  room: z.lazy(() => RoomOrderByWithRelationInputObjectSchema).optional(),
  reports: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const MessageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MessageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageOrderByWithRelationInput>;
export const MessageOrderByWithRelationInputObjectZodSchema = makeSchema();
