import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  name: z.string().max(255),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const HashtagCreateWithoutPollHashtagsInputObjectSchema: z.ZodType<Prisma.HashtagCreateWithoutPollHashtagsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagCreateWithoutPollHashtagsInput>;
export const HashtagCreateWithoutPollHashtagsInputObjectZodSchema = makeSchema();
