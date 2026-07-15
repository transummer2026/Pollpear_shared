import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollDependencyScalarWhereInputObjectSchema as PollDependencyScalarWhereInputObjectSchema } from './PollDependencyScalarWhereInput.schema';
import { PollDependencyUpdateManyMutationInputObjectSchema as PollDependencyUpdateManyMutationInputObjectSchema } from './PollDependencyUpdateManyMutationInput.schema';
import { PollDependencyUncheckedUpdateManyWithoutOptionInputObjectSchema as PollDependencyUncheckedUpdateManyWithoutOptionInputObjectSchema } from './PollDependencyUncheckedUpdateManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollDependencyScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PollDependencyUpdateManyMutationInputObjectSchema), z.lazy(() => PollDependencyUncheckedUpdateManyWithoutOptionInputObjectSchema)])
}).strict();
export const PollDependencyUpdateManyWithWhereWithoutOptionInputObjectSchema: z.ZodType<Prisma.PollDependencyUpdateManyWithWhereWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUpdateManyWithWhereWithoutOptionInput>;
export const PollDependencyUpdateManyWithWhereWithoutOptionInputObjectZodSchema = makeSchema();
