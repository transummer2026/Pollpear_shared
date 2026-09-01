import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { RoomArgsObjectSchema as RoomArgsObjectSchema } from './RoomArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  authorId: z.boolean().optional(),
  roomId: z.boolean().optional(),
  author: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  room: z.union([z.boolean(), z.lazy(() => RoomArgsObjectSchema)]).optional()
}).strict();
export const MessageSelectObjectSchema: z.ZodType<Prisma.MessageSelect> = makeSchema() as unknown as z.ZodType<Prisma.MessageSelect>;
export const MessageSelectObjectZodSchema = makeSchema();
