import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateNestedOneWithoutPollHashtagsInputObjectSchema as PollCreateNestedOneWithoutPollHashtagsInputObjectSchema } from './PollCreateNestedOneWithoutPollHashtagsInput.schema';
import { HashtagCreateNestedOneWithoutPollHashtagsInputObjectSchema as HashtagCreateNestedOneWithoutPollHashtagsInputObjectSchema } from './HashtagCreateNestedOneWithoutPollHashtagsInput.schema'

const makeSchema = () => z.object({
  poll: z.lazy(() => PollCreateNestedOneWithoutPollHashtagsInputObjectSchema),
  hashtag: z.lazy(() => HashtagCreateNestedOneWithoutPollHashtagsInputObjectSchema)
}).strict();
export const PollHashtagCreateInputObjectSchema: z.ZodType<Prisma.PollHashtagCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagCreateInput>;
export const PollHashtagCreateInputObjectZodSchema = makeSchema();
