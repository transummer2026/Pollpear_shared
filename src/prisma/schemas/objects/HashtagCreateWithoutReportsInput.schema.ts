import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagCreateNestedManyWithoutHashtagInputObjectSchema as PollHashtagCreateNestedManyWithoutHashtagInputObjectSchema } from './PollHashtagCreateNestedManyWithoutHashtagInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  isVisible: z.boolean(),
  pollHashtags: z.lazy(() => PollHashtagCreateNestedManyWithoutHashtagInputObjectSchema).optional()
}).strict();
export const HashtagCreateWithoutReportsInputObjectSchema: z.ZodType<Prisma.HashtagCreateWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagCreateWithoutReportsInput>;
export const HashtagCreateWithoutReportsInputObjectZodSchema = makeSchema();
