import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const HashtagUncheckedCreateWithoutPollHashtagsInputObjectSchema: z.ZodType<Prisma.HashtagUncheckedCreateWithoutPollHashtagsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUncheckedCreateWithoutPollHashtagsInput>;
export const HashtagUncheckedCreateWithoutPollHashtagsInputObjectZodSchema = makeSchema();
