import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagCreateNestedManyWithoutHashtagInputObjectSchema as PollHashtagCreateNestedManyWithoutHashtagInputObjectSchema } from './PollHashtagCreateNestedManyWithoutHashtagInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  pollHashtags: z.lazy(() => PollHashtagCreateNestedManyWithoutHashtagInputObjectSchema).optional()
}).strict();
export const HashtagCreateWithoutReportsInputObjectSchema: z.ZodType<Prisma.HashtagCreateWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagCreateWithoutReportsInput>;
export const HashtagCreateWithoutReportsInputObjectZodSchema = makeSchema();
