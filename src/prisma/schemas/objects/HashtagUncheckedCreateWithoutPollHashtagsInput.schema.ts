import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { ReportUncheckedCreateNestedManyWithoutHashtagInputObjectSchema as ReportUncheckedCreateNestedManyWithoutHashtagInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutHashtagInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  isVisible: z.boolean(),
  reports: z.lazy(() => ReportUncheckedCreateNestedManyWithoutHashtagInputObjectSchema).optional()
}).strict();
export const HashtagUncheckedCreateWithoutPollHashtagsInputObjectSchema: z.ZodType<Prisma.HashtagUncheckedCreateWithoutPollHashtagsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUncheckedCreateWithoutPollHashtagsInput>;
export const HashtagUncheckedCreateWithoutPollHashtagsInputObjectZodSchema = makeSchema();
