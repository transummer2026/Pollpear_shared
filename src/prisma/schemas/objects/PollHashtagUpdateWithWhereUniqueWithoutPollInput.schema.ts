import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './PollHashtagWhereUniqueInput.schema';
import { PollHashtagUpdateWithoutPollInputObjectSchema as PollHashtagUpdateWithoutPollInputObjectSchema } from './PollHashtagUpdateWithoutPollInput.schema';
import { PollHashtagUncheckedUpdateWithoutPollInputObjectSchema as PollHashtagUncheckedUpdateWithoutPollInputObjectSchema } from './PollHashtagUncheckedUpdateWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollHashtagWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PollHashtagUpdateWithoutPollInputObjectSchema), z.lazy(() => PollHashtagUncheckedUpdateWithoutPollInputObjectSchema)])
}).strict();
export const PollHashtagUpdateWithWhereUniqueWithoutPollInputObjectSchema: z.ZodType<Prisma.PollHashtagUpdateWithWhereUniqueWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUpdateWithWhereUniqueWithoutPollInput>;
export const PollHashtagUpdateWithWhereUniqueWithoutPollInputObjectZodSchema = makeSchema();
