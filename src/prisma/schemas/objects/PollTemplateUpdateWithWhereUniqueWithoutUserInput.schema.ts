import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './PollTemplateWhereUniqueInput.schema';
import { PollTemplateUpdateWithoutUserInputObjectSchema as PollTemplateUpdateWithoutUserInputObjectSchema } from './PollTemplateUpdateWithoutUserInput.schema';
import { PollTemplateUncheckedUpdateWithoutUserInputObjectSchema as PollTemplateUncheckedUpdateWithoutUserInputObjectSchema } from './PollTemplateUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollTemplateWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PollTemplateUpdateWithoutUserInputObjectSchema), z.lazy(() => PollTemplateUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const PollTemplateUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PollTemplateUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUpdateWithWhereUniqueWithoutUserInput>;
export const PollTemplateUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
