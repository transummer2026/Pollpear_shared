import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagUpdateOneRequiredWithoutPollHashtagsNestedInputObjectSchema as HashtagUpdateOneRequiredWithoutPollHashtagsNestedInputObjectSchema } from './HashtagUpdateOneRequiredWithoutPollHashtagsNestedInput.schema'

const makeSchema = () => z.object({
  hashtag: z.lazy(() => HashtagUpdateOneRequiredWithoutPollHashtagsNestedInputObjectSchema).optional()
}).strict();
export const PollHashtagUpdateWithoutPollInputObjectSchema: z.ZodType<Prisma.PollHashtagUpdateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUpdateWithoutPollInput>;
export const PollHashtagUpdateWithoutPollInputObjectZodSchema = makeSchema();
