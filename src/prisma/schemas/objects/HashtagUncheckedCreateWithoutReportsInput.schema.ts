import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagUncheckedCreateNestedManyWithoutHashtagInputObjectSchema as PollHashtagUncheckedCreateNestedManyWithoutHashtagInputObjectSchema } from './PollHashtagUncheckedCreateNestedManyWithoutHashtagInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  isVisible: z.boolean(),
  pollHashtags: z.lazy(() => PollHashtagUncheckedCreateNestedManyWithoutHashtagInputObjectSchema).optional()
}).strict();
export const HashtagUncheckedCreateWithoutReportsInputObjectSchema: z.ZodType<Prisma.HashtagUncheckedCreateWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUncheckedCreateWithoutReportsInput>;
export const HashtagUncheckedCreateWithoutReportsInputObjectZodSchema = makeSchema();
