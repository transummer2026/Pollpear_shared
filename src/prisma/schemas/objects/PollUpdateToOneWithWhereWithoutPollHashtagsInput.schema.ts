import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema';
import { PollUpdateWithoutPollHashtagsInputObjectSchema as PollUpdateWithoutPollHashtagsInputObjectSchema } from './PollUpdateWithoutPollHashtagsInput.schema';
import { PollUncheckedUpdateWithoutPollHashtagsInputObjectSchema as PollUncheckedUpdateWithoutPollHashtagsInputObjectSchema } from './PollUncheckedUpdateWithoutPollHashtagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PollUpdateWithoutPollHashtagsInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutPollHashtagsInputObjectSchema)])
}).strict();
export const PollUpdateToOneWithWhereWithoutPollHashtagsInputObjectSchema: z.ZodType<Prisma.PollUpdateToOneWithWhereWithoutPollHashtagsInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateToOneWithWhereWithoutPollHashtagsInput>;
export const PollUpdateToOneWithWhereWithoutPollHashtagsInputObjectZodSchema = makeSchema();
