import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagWhereUniqueInputObjectSchema as HashtagWhereUniqueInputObjectSchema } from './HashtagWhereUniqueInput.schema';
import { HashtagCreateWithoutPollHashtagsInputObjectSchema as HashtagCreateWithoutPollHashtagsInputObjectSchema } from './HashtagCreateWithoutPollHashtagsInput.schema';
import { HashtagUncheckedCreateWithoutPollHashtagsInputObjectSchema as HashtagUncheckedCreateWithoutPollHashtagsInputObjectSchema } from './HashtagUncheckedCreateWithoutPollHashtagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HashtagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HashtagCreateWithoutPollHashtagsInputObjectSchema), z.lazy(() => HashtagUncheckedCreateWithoutPollHashtagsInputObjectSchema)])
}).strict();
export const HashtagCreateOrConnectWithoutPollHashtagsInputObjectSchema: z.ZodType<Prisma.HashtagCreateOrConnectWithoutPollHashtagsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagCreateOrConnectWithoutPollHashtagsInput>;
export const HashtagCreateOrConnectWithoutPollHashtagsInputObjectZodSchema = makeSchema();
