import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const roommemberscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RoomMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RoomMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoomMemberScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoomMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RoomMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  joinedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  roomId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const RoomMemberScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RoomMemberScalarWhereWithAggregatesInput> = roommemberscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RoomMemberScalarWhereWithAggregatesInput>;
export const RoomMemberScalarWhereWithAggregatesInputObjectZodSchema = roommemberscalarwherewithaggregatesinputSchema;
