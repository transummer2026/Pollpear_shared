import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { RoomArgsObjectSchema as RoomArgsObjectSchema } from './RoomArgs.schema'

const makeSchema = () => z.object({
  author: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  room: z.union([z.boolean(), z.lazy(() => RoomArgsObjectSchema)]).optional()
}).strict();
export const MessageIncludeObjectSchema: z.ZodType<Prisma.MessageInclude> = makeSchema() as unknown as z.ZodType<Prisma.MessageInclude>;
export const MessageIncludeObjectZodSchema = makeSchema();
