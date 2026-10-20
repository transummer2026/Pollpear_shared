import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutMessagesInputObjectSchema as UserCreateNestedOneWithoutMessagesInputObjectSchema } from './UserCreateNestedOneWithoutMessagesInput.schema';
import { ReportCreateNestedManyWithoutMessageInputObjectSchema as ReportCreateNestedManyWithoutMessageInputObjectSchema } from './ReportCreateNestedManyWithoutMessageInput.schema'

const makeSchema = () => z.object({
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  author: z.lazy(() => UserCreateNestedOneWithoutMessagesInputObjectSchema),
  reports: z.lazy(() => ReportCreateNestedManyWithoutMessageInputObjectSchema).optional()
}).strict();
export const MessageCreateWithoutRoomInputObjectSchema: z.ZodType<Prisma.MessageCreateWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateWithoutRoomInput>;
export const MessageCreateWithoutRoomInputObjectZodSchema = makeSchema();
