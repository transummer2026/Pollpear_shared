import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateScalarWhereInputObjectSchema as PollTemplateScalarWhereInputObjectSchema } from './PollTemplateScalarWhereInput.schema';
import { PollTemplateUpdateManyMutationInputObjectSchema as PollTemplateUpdateManyMutationInputObjectSchema } from './PollTemplateUpdateManyMutationInput.schema';
import { PollTemplateUncheckedUpdateManyWithoutPollInputObjectSchema as PollTemplateUncheckedUpdateManyWithoutPollInputObjectSchema } from './PollTemplateUncheckedUpdateManyWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollTemplateScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PollTemplateUpdateManyMutationInputObjectSchema), z.lazy(() => PollTemplateUncheckedUpdateManyWithoutPollInputObjectSchema)])
}).strict();
export const PollTemplateUpdateManyWithWhereWithoutPollInputObjectSchema: z.ZodType<Prisma.PollTemplateUpdateManyWithWhereWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUpdateManyWithWhereWithoutPollInput>;
export const PollTemplateUpdateManyWithWhereWithoutPollInputObjectZodSchema = makeSchema();
