import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutMessagesInputObjectSchema as UserCreateNestedOneWithoutMessagesInputObjectSchema } from './UserCreateNestedOneWithoutMessagesInput.schema';
import { RoomCreateNestedOneWithoutMessagesInputObjectSchema as RoomCreateNestedOneWithoutMessagesInputObjectSchema } from './RoomCreateNestedOneWithoutMessagesInput.schema'

const makeSchema = () => z.object({
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  author: z.lazy(() => UserCreateNestedOneWithoutMessagesInputObjectSchema),
  room: z.lazy(() => RoomCreateNestedOneWithoutMessagesInputObjectSchema)
}).strict();
export const MessageCreateInputObjectSchema: z.ZodType<Prisma.MessageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateInput>;
export const MessageCreateInputObjectZodSchema = makeSchema();
