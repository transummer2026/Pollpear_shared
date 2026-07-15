import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => RoomWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => RoomWhereInputObjectSchema).optional().nullable()
}).strict();
export const RoomNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.RoomNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RoomNullableScalarRelationFilter>;
export const RoomNullableScalarRelationFilterObjectZodSchema = makeSchema();
