import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { RoomOrderByWithRelationInputObjectSchema as RoomOrderByWithRelationInputObjectSchema } from './RoomOrderByWithRelationInput.schema';
import { MessageOrderByWithRelationInputObjectSchema as MessageOrderByWithRelationInputObjectSchema } from './MessageOrderByWithRelationInput.schema';
import { PollOrderByWithRelationInputObjectSchema as PollOrderByWithRelationInputObjectSchema } from './PollOrderByWithRelationInput.schema';
import { OptionOrderByWithRelationInputObjectSchema as OptionOrderByWithRelationInputObjectSchema } from './OptionOrderByWithRelationInput.schema';
import { HashtagOrderByWithRelationInputObjectSchema as HashtagOrderByWithRelationInputObjectSchema } from './HashtagOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  reporterId: SortOrderSchema.optional(),
  reportedId: SortOrderSchema.optional(),
  roomId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  messageId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pollId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  optionId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  hashtagId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reporter: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  reported: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  room: z.lazy(() => RoomOrderByWithRelationInputObjectSchema).optional(),
  message: z.lazy(() => MessageOrderByWithRelationInputObjectSchema).optional(),
  poll: z.lazy(() => PollOrderByWithRelationInputObjectSchema).optional(),
  option: z.lazy(() => OptionOrderByWithRelationInputObjectSchema).optional(),
  hashtag: z.lazy(() => HashtagOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ReportOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReportOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportOrderByWithRelationInput>;
export const ReportOrderByWithRelationInputObjectZodSchema = makeSchema();
