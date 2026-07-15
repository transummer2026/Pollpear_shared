import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { RoomScalarRelationFilterObjectSchema as RoomScalarRelationFilterObjectSchema } from './RoomScalarRelationFilter.schema';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const roommemberwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RoomMemberWhereInputObjectSchema), z.lazy(() => RoomMemberWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RoomMemberWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RoomMemberWhereInputObjectSchema), z.lazy(() => RoomMemberWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  joinedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  roomId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  room: z.union([z.lazy(() => RoomScalarRelationFilterObjectSchema), z.lazy(() => RoomWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const RoomMemberWhereInputObjectSchema: z.ZodType<Prisma.RoomMemberWhereInput> = roommemberwhereinputSchema as unknown as z.ZodType<Prisma.RoomMemberWhereInput>;
export const RoomMemberWhereInputObjectZodSchema = roommemberwhereinputSchema;
