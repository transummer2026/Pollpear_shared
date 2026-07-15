import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomMemberWhereInputObjectSchema as RoomMemberWhereInputObjectSchema } from './RoomMemberWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RoomMemberWhereInputObjectSchema).optional(),
  some: z.lazy(() => RoomMemberWhereInputObjectSchema).optional(),
  none: z.lazy(() => RoomMemberWhereInputObjectSchema).optional()
}).strict();
export const RoomMemberListRelationFilterObjectSchema: z.ZodType<Prisma.RoomMemberListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RoomMemberListRelationFilter>;
export const RoomMemberListRelationFilterObjectZodSchema = makeSchema();
