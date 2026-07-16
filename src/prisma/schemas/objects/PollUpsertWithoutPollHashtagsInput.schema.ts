import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollUpdateWithoutPollHashtagsInputObjectSchema as PollUpdateWithoutPollHashtagsInputObjectSchema } from './PollUpdateWithoutPollHashtagsInput.schema';
import { PollUncheckedUpdateWithoutPollHashtagsInputObjectSchema as PollUncheckedUpdateWithoutPollHashtagsInputObjectSchema } from './PollUncheckedUpdateWithoutPollHashtagsInput.schema';
import { PollCreateWithoutPollHashtagsInputObjectSchema as PollCreateWithoutPollHashtagsInputObjectSchema } from './PollCreateWithoutPollHashtagsInput.schema';
import { PollUncheckedCreateWithoutPollHashtagsInputObjectSchema as PollUncheckedCreateWithoutPollHashtagsInputObjectSchema } from './PollUncheckedCreateWithoutPollHashtagsInput.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PollUpdateWithoutPollHashtagsInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutPollHashtagsInputObjectSchema)]),
  create: z.union([z.lazy(() => PollCreateWithoutPollHashtagsInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutPollHashtagsInputObjectSchema)]),
  where: z.lazy(() => PollWhereInputObjectSchema).optional()
}).strict();
export const PollUpsertWithoutPollHashtagsInputObjectSchema: z.ZodType<Prisma.PollUpsertWithoutPollHashtagsInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpsertWithoutPollHashtagsInput>;
export const PollUpsertWithoutPollHashtagsInputObjectZodSchema = makeSchema();
