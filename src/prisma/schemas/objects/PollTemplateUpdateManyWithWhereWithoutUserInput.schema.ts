import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateScalarWhereInputObjectSchema as PollTemplateScalarWhereInputObjectSchema } from './PollTemplateScalarWhereInput.schema';
import { PollTemplateUpdateManyMutationInputObjectSchema as PollTemplateUpdateManyMutationInputObjectSchema } from './PollTemplateUpdateManyMutationInput.schema';
import { PollTemplateUncheckedUpdateManyWithoutUserInputObjectSchema as PollTemplateUncheckedUpdateManyWithoutUserInputObjectSchema } from './PollTemplateUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollTemplateScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PollTemplateUpdateManyMutationInputObjectSchema), z.lazy(() => PollTemplateUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const PollTemplateUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.PollTemplateUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUpdateManyWithWhereWithoutUserInput>;
export const PollTemplateUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
