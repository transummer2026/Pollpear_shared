import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportUncheckedCreateNestedManyWithoutMessageInputObjectSchema as ReportUncheckedCreateNestedManyWithoutMessageInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutMessageInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  authorId: z.number().int(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutMessageInputObjectSchema).optional()
}).strict();
export const MessageUncheckedCreateWithoutRoomInputObjectSchema: z.ZodType<Prisma.MessageUncheckedCreateWithoutRoomInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUncheckedCreateWithoutRoomInput>;
export const MessageUncheckedCreateWithoutRoomInputObjectZodSchema = makeSchema();
