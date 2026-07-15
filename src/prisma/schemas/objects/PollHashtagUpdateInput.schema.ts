import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollUpdateOneRequiredWithoutPollHashtagsNestedInputObjectSchema as PollUpdateOneRequiredWithoutPollHashtagsNestedInputObjectSchema } from './PollUpdateOneRequiredWithoutPollHashtagsNestedInput.schema';
import { HashtagUpdateOneRequiredWithoutPollHashtagsNestedInputObjectSchema as HashtagUpdateOneRequiredWithoutPollHashtagsNestedInputObjectSchema } from './HashtagUpdateOneRequiredWithoutPollHashtagsNestedInput.schema'

const makeSchema = () => z.object({
  poll: z.lazy(() => PollUpdateOneRequiredWithoutPollHashtagsNestedInputObjectSchema).optional(),
  hashtag: z.lazy(() => HashtagUpdateOneRequiredWithoutPollHashtagsNestedInputObjectSchema).optional()
}).strict();
export const PollHashtagUpdateInputObjectSchema: z.ZodType<Prisma.PollHashtagUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUpdateInput>;
export const PollHashtagUpdateInputObjectZodSchema = makeSchema();
