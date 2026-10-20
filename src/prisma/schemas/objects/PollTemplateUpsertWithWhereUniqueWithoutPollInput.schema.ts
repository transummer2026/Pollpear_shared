import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './PollTemplateWhereUniqueInput.schema';
import { PollTemplateUpdateWithoutPollInputObjectSchema as PollTemplateUpdateWithoutPollInputObjectSchema } from './PollTemplateUpdateWithoutPollInput.schema';
import { PollTemplateUncheckedUpdateWithoutPollInputObjectSchema as PollTemplateUncheckedUpdateWithoutPollInputObjectSchema } from './PollTemplateUncheckedUpdateWithoutPollInput.schema';
import { PollTemplateCreateWithoutPollInputObjectSchema as PollTemplateCreateWithoutPollInputObjectSchema } from './PollTemplateCreateWithoutPollInput.schema';
import { PollTemplateUncheckedCreateWithoutPollInputObjectSchema as PollTemplateUncheckedCreateWithoutPollInputObjectSchema } from './PollTemplateUncheckedCreateWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollTemplateWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PollTemplateUpdateWithoutPollInputObjectSchema), z.lazy(() => PollTemplateUncheckedUpdateWithoutPollInputObjectSchema)]),
  create: z.union([z.lazy(() => PollTemplateCreateWithoutPollInputObjectSchema), z.lazy(() => PollTemplateUncheckedCreateWithoutPollInputObjectSchema)])
}).strict();
export const PollTemplateUpsertWithWhereUniqueWithoutPollInputObjectSchema: z.ZodType<Prisma.PollTemplateUpsertWithWhereUniqueWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUpsertWithWhereUniqueWithoutPollInput>;
export const PollTemplateUpsertWithWhereUniqueWithoutPollInputObjectZodSchema = makeSchema();
