import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagWhereInputObjectSchema as HashtagWhereInputObjectSchema } from './HashtagWhereInput.schema';
import { HashtagUpdateWithoutPollHashtagsInputObjectSchema as HashtagUpdateWithoutPollHashtagsInputObjectSchema } from './HashtagUpdateWithoutPollHashtagsInput.schema';
import { HashtagUncheckedUpdateWithoutPollHashtagsInputObjectSchema as HashtagUncheckedUpdateWithoutPollHashtagsInputObjectSchema } from './HashtagUncheckedUpdateWithoutPollHashtagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HashtagWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => HashtagUpdateWithoutPollHashtagsInputObjectSchema), z.lazy(() => HashtagUncheckedUpdateWithoutPollHashtagsInputObjectSchema)])
}).strict();
export const HashtagUpdateToOneWithWhereWithoutPollHashtagsInputObjectSchema: z.ZodType<Prisma.HashtagUpdateToOneWithWhereWithoutPollHashtagsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUpdateToOneWithWhereWithoutPollHashtagsInput>;
export const HashtagUpdateToOneWithWhereWithoutPollHashtagsInputObjectZodSchema = makeSchema();
