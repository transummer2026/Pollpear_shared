import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './PollTemplateWhereUniqueInput.schema';
import { PollTemplateUpdateWithoutPollInputObjectSchema as PollTemplateUpdateWithoutPollInputObjectSchema } from './PollTemplateUpdateWithoutPollInput.schema';
import { PollTemplateUncheckedUpdateWithoutPollInputObjectSchema as PollTemplateUncheckedUpdateWithoutPollInputObjectSchema } from './PollTemplateUncheckedUpdateWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollTemplateWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PollTemplateUpdateWithoutPollInputObjectSchema), z.lazy(() => PollTemplateUncheckedUpdateWithoutPollInputObjectSchema)])
}).strict();
export const PollTemplateUpdateWithWhereUniqueWithoutPollInputObjectSchema: z.ZodType<Prisma.PollTemplateUpdateWithWhereUniqueWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUpdateWithWhereUniqueWithoutPollInput>;
export const PollTemplateUpdateWithWhereUniqueWithoutPollInputObjectZodSchema = makeSchema();
