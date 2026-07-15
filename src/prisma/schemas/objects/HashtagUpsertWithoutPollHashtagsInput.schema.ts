import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagUpdateWithoutPollHashtagsInputObjectSchema as HashtagUpdateWithoutPollHashtagsInputObjectSchema } from './HashtagUpdateWithoutPollHashtagsInput.schema';
import { HashtagUncheckedUpdateWithoutPollHashtagsInputObjectSchema as HashtagUncheckedUpdateWithoutPollHashtagsInputObjectSchema } from './HashtagUncheckedUpdateWithoutPollHashtagsInput.schema';
import { HashtagCreateWithoutPollHashtagsInputObjectSchema as HashtagCreateWithoutPollHashtagsInputObjectSchema } from './HashtagCreateWithoutPollHashtagsInput.schema';
import { HashtagUncheckedCreateWithoutPollHashtagsInputObjectSchema as HashtagUncheckedCreateWithoutPollHashtagsInputObjectSchema } from './HashtagUncheckedCreateWithoutPollHashtagsInput.schema';
import { HashtagWhereInputObjectSchema as HashtagWhereInputObjectSchema } from './HashtagWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => HashtagUpdateWithoutPollHashtagsInputObjectSchema), z.lazy(() => HashtagUncheckedUpdateWithoutPollHashtagsInputObjectSchema)]),
  create: z.union([z.lazy(() => HashtagCreateWithoutPollHashtagsInputObjectSchema), z.lazy(() => HashtagUncheckedCreateWithoutPollHashtagsInputObjectSchema)]),
  where: z.lazy(() => HashtagWhereInputObjectSchema).optional()
}).strict();
export const HashtagUpsertWithoutPollHashtagsInputObjectSchema: z.ZodType<Prisma.HashtagUpsertWithoutPollHashtagsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUpsertWithoutPollHashtagsInput>;
export const HashtagUpsertWithoutPollHashtagsInputObjectZodSchema = makeSchema();
