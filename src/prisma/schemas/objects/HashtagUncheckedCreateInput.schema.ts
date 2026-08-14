import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagUncheckedCreateNestedManyWithoutHashtagInputObjectSchema as PollHashtagUncheckedCreateNestedManyWithoutHashtagInputObjectSchema } from './PollHashtagUncheckedCreateNestedManyWithoutHashtagInput.schema';
import { ReportUncheckedCreateNestedManyWithoutHashtagInputObjectSchema as ReportUncheckedCreateNestedManyWithoutHashtagInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutHashtagInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(255),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  pollHashtags: z.lazy(() => PollHashtagUncheckedCreateNestedManyWithoutHashtagInputObjectSchema).optional(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutHashtagInputObjectSchema).optional()
}).strict();
export const HashtagUncheckedCreateInputObjectSchema: z.ZodType<Prisma.HashtagUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUncheckedCreateInput>;
export const HashtagUncheckedCreateInputObjectZodSchema = makeSchema();
