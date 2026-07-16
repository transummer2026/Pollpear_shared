import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { PollScalarRelationFilterObjectSchema as PollScalarRelationFilterObjectSchema } from './PollScalarRelationFilter.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema';
import { HashtagScalarRelationFilterObjectSchema as HashtagScalarRelationFilterObjectSchema } from './HashtagScalarRelationFilter.schema';
import { HashtagWhereInputObjectSchema as HashtagWhereInputObjectSchema } from './HashtagWhereInput.schema'

const pollhashtagwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PollHashtagWhereInputObjectSchema), z.lazy(() => PollHashtagWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PollHashtagWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PollHashtagWhereInputObjectSchema), z.lazy(() => PollHashtagWhereInputObjectSchema).array()]).optional(),
  pollId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  hashtagId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  poll: z.union([z.lazy(() => PollScalarRelationFilterObjectSchema), z.lazy(() => PollWhereInputObjectSchema)]).optional(),
  hashtag: z.union([z.lazy(() => HashtagScalarRelationFilterObjectSchema), z.lazy(() => HashtagWhereInputObjectSchema)]).optional()
}).strict();
export const PollHashtagWhereInputObjectSchema: z.ZodType<Prisma.PollHashtagWhereInput> = pollhashtagwhereinputSchema as unknown as z.ZodType<Prisma.PollHashtagWhereInput>;
export const PollHashtagWhereInputObjectZodSchema = pollhashtagwhereinputSchema;
