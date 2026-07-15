import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportUncheckedCreateNestedManyWithoutMessageInputObjectSchema as ReportUncheckedCreateNestedManyWithoutMessageInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutMessageInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  authorId: z.number().int(),
  roomId: z.number().int(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutMessageInputObjectSchema).optional()
}).strict();
export const MessageUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MessageUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUncheckedCreateInput>;
export const MessageUncheckedCreateInputObjectZodSchema = makeSchema();
