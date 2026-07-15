import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RoomWhereInputObjectSchema).optional(),
  some: z.lazy(() => RoomWhereInputObjectSchema).optional(),
  none: z.lazy(() => RoomWhereInputObjectSchema).optional()
}).strict();
export const RoomListRelationFilterObjectSchema: z.ZodType<Prisma.RoomListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RoomListRelationFilter>;
export const RoomListRelationFilterObjectZodSchema = makeSchema();
