import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyScalarWhereInputObjectSchema as PollDependencyScalarWhereInputObjectSchema } from './PollDependencyScalarWhereInput.schema';
import { PollDependencyUpdateManyMutationInputObjectSchema as PollDependencyUpdateManyMutationInputObjectSchema } from './PollDependencyUpdateManyMutationInput.schema';
import { PollDependencyUncheckedUpdateManyWithoutChildPollInputObjectSchema as PollDependencyUncheckedUpdateManyWithoutChildPollInputObjectSchema } from './PollDependencyUncheckedUpdateManyWithoutChildPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollDependencyScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PollDependencyUpdateManyMutationInputObjectSchema), z.lazy(() => PollDependencyUncheckedUpdateManyWithoutChildPollInputObjectSchema)])
}).strict();
export const PollDependencyUpdateManyWithWhereWithoutChildPollInputObjectSchema: z.ZodType<Prisma.PollDependencyUpdateManyWithWhereWithoutChildPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUpdateManyWithWhereWithoutChildPollInput>;
export const PollDependencyUpdateManyWithWhereWithoutChildPollInputObjectZodSchema = makeSchema();
