import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './PollTemplateWhereUniqueInput.schema';
import { PollTemplateUpdateWithoutUserInputObjectSchema as PollTemplateUpdateWithoutUserInputObjectSchema } from './PollTemplateUpdateWithoutUserInput.schema';
import { PollTemplateUncheckedUpdateWithoutUserInputObjectSchema as PollTemplateUncheckedUpdateWithoutUserInputObjectSchema } from './PollTemplateUncheckedUpdateWithoutUserInput.schema';
import { PollTemplateCreateWithoutUserInputObjectSchema as PollTemplateCreateWithoutUserInputObjectSchema } from './PollTemplateCreateWithoutUserInput.schema';
import { PollTemplateUncheckedCreateWithoutUserInputObjectSchema as PollTemplateUncheckedCreateWithoutUserInputObjectSchema } from './PollTemplateUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollTemplateWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PollTemplateUpdateWithoutUserInputObjectSchema), z.lazy(() => PollTemplateUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => PollTemplateCreateWithoutUserInputObjectSchema), z.lazy(() => PollTemplateUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PollTemplateUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PollTemplateUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUpsertWithWhereUniqueWithoutUserInput>;
export const PollTemplateUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
