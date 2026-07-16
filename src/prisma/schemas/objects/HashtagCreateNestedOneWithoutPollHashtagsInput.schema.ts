import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagCreateWithoutPollHashtagsInputObjectSchema as HashtagCreateWithoutPollHashtagsInputObjectSchema } from './HashtagCreateWithoutPollHashtagsInput.schema';
import { HashtagUncheckedCreateWithoutPollHashtagsInputObjectSchema as HashtagUncheckedCreateWithoutPollHashtagsInputObjectSchema } from './HashtagUncheckedCreateWithoutPollHashtagsInput.schema';
import { HashtagCreateOrConnectWithoutPollHashtagsInputObjectSchema as HashtagCreateOrConnectWithoutPollHashtagsInputObjectSchema } from './HashtagCreateOrConnectWithoutPollHashtagsInput.schema';
import { HashtagWhereUniqueInputObjectSchema as HashtagWhereUniqueInputObjectSchema } from './HashtagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HashtagCreateWithoutPollHashtagsInputObjectSchema), z.lazy(() => HashtagUncheckedCreateWithoutPollHashtagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HashtagCreateOrConnectWithoutPollHashtagsInputObjectSchema).optional(),
  connect: z.lazy(() => HashtagWhereUniqueInputObjectSchema).optional()
}).strict();
export const HashtagCreateNestedOneWithoutPollHashtagsInputObjectSchema: z.ZodType<Prisma.HashtagCreateNestedOneWithoutPollHashtagsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagCreateNestedOneWithoutPollHashtagsInput>;
export const HashtagCreateNestedOneWithoutPollHashtagsInputObjectZodSchema = makeSchema();
