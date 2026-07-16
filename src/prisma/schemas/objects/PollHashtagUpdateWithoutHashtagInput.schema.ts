import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollUpdateOneRequiredWithoutPollHashtagsNestedInputObjectSchema as PollUpdateOneRequiredWithoutPollHashtagsNestedInputObjectSchema } from './PollUpdateOneRequiredWithoutPollHashtagsNestedInput.schema'

const makeSchema = () => z.object({
  poll: z.lazy(() => PollUpdateOneRequiredWithoutPollHashtagsNestedInputObjectSchema).optional()
}).strict();
export const PollHashtagUpdateWithoutHashtagInputObjectSchema: z.ZodType<Prisma.PollHashtagUpdateWithoutHashtagInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUpdateWithoutHashtagInput>;
export const PollHashtagUpdateWithoutHashtagInputObjectZodSchema = makeSchema();
