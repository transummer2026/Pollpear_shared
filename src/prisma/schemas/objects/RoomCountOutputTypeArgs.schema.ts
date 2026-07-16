import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCountOutputTypeSelectObjectSchema as RoomCountOutputTypeSelectObjectSchema } from './RoomCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RoomCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const RoomCountOutputTypeArgsObjectSchema = makeSchema();
export const RoomCountOutputTypeArgsObjectZodSchema = makeSchema();
