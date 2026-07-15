import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './PollHashtagWhereUniqueInput.schema';
import { PollHashtagUpdateWithoutPollInputObjectSchema as PollHashtagUpdateWithoutPollInputObjectSchema } from './PollHashtagUpdateWithoutPollInput.schema';
import { PollHashtagUncheckedUpdateWithoutPollInputObjectSchema as PollHashtagUncheckedUpdateWithoutPollInputObjectSchema } from './PollHashtagUncheckedUpdateWithoutPollInput.schema';
import { PollHashtagCreateWithoutPollInputObjectSchema as PollHashtagCreateWithoutPollInputObjectSchema } from './PollHashtagCreateWithoutPollInput.schema';
import { PollHashtagUncheckedCreateWithoutPollInputObjectSchema as PollHashtagUncheckedCreateWithoutPollInputObjectSchema } from './PollHashtagUncheckedCreateWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollHashtagWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PollHashtagUpdateWithoutPollInputObjectSchema), z.lazy(() => PollHashtagUncheckedUpdateWithoutPollInputObjectSchema)]),
  create: z.union([z.lazy(() => PollHashtagCreateWithoutPollInputObjectSchema), z.lazy(() => PollHashtagUncheckedCreateWithoutPollInputObjectSchema)])
}).strict();
export const PollHashtagUpsertWithWhereUniqueWithoutPollInputObjectSchema: z.ZodType<Prisma.PollHashtagUpsertWithWhereUniqueWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUpsertWithWhereUniqueWithoutPollInput>;
export const PollHashtagUpsertWithWhereUniqueWithoutPollInputObjectZodSchema = makeSchema();
