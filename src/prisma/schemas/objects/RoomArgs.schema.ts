import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomSelectObjectSchema as RoomSelectObjectSchema } from './RoomSelect.schema';
import { RoomIncludeObjectSchema as RoomIncludeObjectSchema } from './RoomInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RoomSelectObjectSchema).optional(),
  include: z.lazy(() => RoomIncludeObjectSchema).optional()
}).strict();
export const RoomArgsObjectSchema = makeSchema();
export const RoomArgsObjectZodSchema = makeSchema();
