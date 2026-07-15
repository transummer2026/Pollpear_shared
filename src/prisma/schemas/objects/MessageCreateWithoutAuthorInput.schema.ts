import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { RoomCreateNestedOneWithoutMessagesInputObjectSchema as RoomCreateNestedOneWithoutMessagesInputObjectSchema } from './RoomCreateNestedOneWithoutMessagesInput.schema';
import { ReportCreateNestedManyWithoutMessageInputObjectSchema as ReportCreateNestedManyWithoutMessageInputObjectSchema } from './ReportCreateNestedManyWithoutMessageInput.schema'

const makeSchema = () => z.object({
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  room: z.lazy(() => RoomCreateNestedOneWithoutMessagesInputObjectSchema),
  reports: z.lazy(() => ReportCreateNestedManyWithoutMessageInputObjectSchema).optional()
}).strict();
export const MessageCreateWithoutAuthorInputObjectSchema: z.ZodType<Prisma.MessageCreateWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateWithoutAuthorInput>;
export const MessageCreateWithoutAuthorInputObjectZodSchema = makeSchema();
