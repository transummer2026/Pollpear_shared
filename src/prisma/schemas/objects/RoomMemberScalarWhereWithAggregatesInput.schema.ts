import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const roommemberscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RoomMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RoomMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoomMemberScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoomMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RoomMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  joinedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  roomId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const RoomMemberScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RoomMemberScalarWhereWithAggregatesInput> = roommemberscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RoomMemberScalarWhereWithAggregatesInput>;
export const RoomMemberScalarWhereWithAggregatesInputObjectZodSchema = roommemberscalarwherewithaggregatesinputSchema;
