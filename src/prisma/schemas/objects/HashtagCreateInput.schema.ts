import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagCreateNestedManyWithoutHashtagInputObjectSchema as PollHashtagCreateNestedManyWithoutHashtagInputObjectSchema } from './PollHashtagCreateNestedManyWithoutHashtagInput.schema';
import { ReportCreateNestedManyWithoutHashtagInputObjectSchema as ReportCreateNestedManyWithoutHashtagInputObjectSchema } from './ReportCreateNestedManyWithoutHashtagInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  pollHashtags: z.lazy(() => PollHashtagCreateNestedManyWithoutHashtagInputObjectSchema).optional(),
  reports: z.lazy(() => ReportCreateNestedManyWithoutHashtagInputObjectSchema).optional()
}).strict();
export const HashtagCreateInputObjectSchema: z.ZodType<Prisma.HashtagCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagCreateInput>;
export const HashtagCreateInputObjectZodSchema = makeSchema();
