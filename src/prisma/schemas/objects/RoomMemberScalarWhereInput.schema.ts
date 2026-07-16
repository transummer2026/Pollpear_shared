import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const roommemberscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RoomMemberScalarWhereInputObjectSchema), z.lazy(() => RoomMemberScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoomMemberScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoomMemberScalarWhereInputObjectSchema), z.lazy(() => RoomMemberScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  joinedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  roomId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const RoomMemberScalarWhereInputObjectSchema: z.ZodType<Prisma.RoomMemberScalarWhereInput> = roommemberscalarwhereinputSchema as unknown as z.ZodType<Prisma.RoomMemberScalarWhereInput>;
export const RoomMemberScalarWhereInputObjectZodSchema = roommemberscalarwhereinputSchema;
