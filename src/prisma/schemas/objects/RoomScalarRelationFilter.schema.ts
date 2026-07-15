import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomWhereInputObjectSchema as RoomWhereInputObjectSchema } from './RoomWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => RoomWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => RoomWhereInputObjectSchema).optional()
}).strict();
export const RoomScalarRelationFilterObjectSchema: z.ZodType<Prisma.RoomScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RoomScalarRelationFilter>;
export const RoomScalarRelationFilterObjectZodSchema = makeSchema();
