import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const pollhashtagscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PollHashtagScalarWhereInputObjectSchema), z.lazy(() => PollHashtagScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PollHashtagScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PollHashtagScalarWhereInputObjectSchema), z.lazy(() => PollHashtagScalarWhereInputObjectSchema).array()]).optional(),
  pollId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  hashtagId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const PollHashtagScalarWhereInputObjectSchema: z.ZodType<Prisma.PollHashtagScalarWhereInput> = pollhashtagscalarwhereinputSchema as unknown as z.ZodType<Prisma.PollHashtagScalarWhereInput>;
export const PollHashtagScalarWhereInputObjectZodSchema = pollhashtagscalarwhereinputSchema;
