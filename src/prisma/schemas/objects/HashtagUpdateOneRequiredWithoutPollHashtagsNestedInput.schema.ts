import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagCreateWithoutPollHashtagsInputObjectSchema as HashtagCreateWithoutPollHashtagsInputObjectSchema } from './HashtagCreateWithoutPollHashtagsInput.schema';
import { HashtagUncheckedCreateWithoutPollHashtagsInputObjectSchema as HashtagUncheckedCreateWithoutPollHashtagsInputObjectSchema } from './HashtagUncheckedCreateWithoutPollHashtagsInput.schema';
import { HashtagCreateOrConnectWithoutPollHashtagsInputObjectSchema as HashtagCreateOrConnectWithoutPollHashtagsInputObjectSchema } from './HashtagCreateOrConnectWithoutPollHashtagsInput.schema';
import { HashtagUpsertWithoutPollHashtagsInputObjectSchema as HashtagUpsertWithoutPollHashtagsInputObjectSchema } from './HashtagUpsertWithoutPollHashtagsInput.schema';
import { HashtagWhereUniqueInputObjectSchema as HashtagWhereUniqueInputObjectSchema } from './HashtagWhereUniqueInput.schema';
import { HashtagUpdateToOneWithWhereWithoutPollHashtagsInputObjectSchema as HashtagUpdateToOneWithWhereWithoutPollHashtagsInputObjectSchema } from './HashtagUpdateToOneWithWhereWithoutPollHashtagsInput.schema';
import { HashtagUpdateWithoutPollHashtagsInputObjectSchema as HashtagUpdateWithoutPollHashtagsInputObjectSchema } from './HashtagUpdateWithoutPollHashtagsInput.schema';
import { HashtagUncheckedUpdateWithoutPollHashtagsInputObjectSchema as HashtagUncheckedUpdateWithoutPollHashtagsInputObjectSchema } from './HashtagUncheckedUpdateWithoutPollHashtagsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HashtagCreateWithoutPollHashtagsInputObjectSchema), z.lazy(() => HashtagUncheckedCreateWithoutPollHashtagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HashtagCreateOrConnectWithoutPollHashtagsInputObjectSchema).optional(),
  upsert: z.lazy(() => HashtagUpsertWithoutPollHashtagsInputObjectSchema).optional(),
  connect: z.lazy(() => HashtagWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => HashtagUpdateToOneWithWhereWithoutPollHashtagsInputObjectSchema), z.lazy(() => HashtagUpdateWithoutPollHashtagsInputObjectSchema), z.lazy(() => HashtagUncheckedUpdateWithoutPollHashtagsInputObjectSchema)]).optional()
}).strict();
export const HashtagUpdateOneRequiredWithoutPollHashtagsNestedInputObjectSchema: z.ZodType<Prisma.HashtagUpdateOneRequiredWithoutPollHashtagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUpdateOneRequiredWithoutPollHashtagsNestedInput>;
export const HashtagUpdateOneRequiredWithoutPollHashtagsNestedInputObjectZodSchema = makeSchema();
