import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagCreateNestedOneWithoutPollHashtagsInputObjectSchema as HashtagCreateNestedOneWithoutPollHashtagsInputObjectSchema } from './HashtagCreateNestedOneWithoutPollHashtagsInput.schema'

const makeSchema = () => z.object({
  hashtag: z.lazy(() => HashtagCreateNestedOneWithoutPollHashtagsInputObjectSchema)
}).strict();
export const PollHashtagCreateWithoutPollInputObjectSchema: z.ZodType<Prisma.PollHashtagCreateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagCreateWithoutPollInput>;
export const PollHashtagCreateWithoutPollInputObjectZodSchema = makeSchema();
