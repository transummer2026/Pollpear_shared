import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollUpdateWithoutChildDependenciesInputObjectSchema as PollUpdateWithoutChildDependenciesInputObjectSchema } from './PollUpdateWithoutChildDependenciesInput.schema';
import { PollUncheckedUpdateWithoutChildDependenciesInputObjectSchema as PollUncheckedUpdateWithoutChildDependenciesInputObjectSchema } from './PollUncheckedUpdateWithoutChildDependenciesInput.schema';
import { PollCreateWithoutChildDependenciesInputObjectSchema as PollCreateWithoutChildDependenciesInputObjectSchema } from './PollCreateWithoutChildDependenciesInput.schema';
import { PollUncheckedCreateWithoutChildDependenciesInputObjectSchema as PollUncheckedCreateWithoutChildDependenciesInputObjectSchema } from './PollUncheckedCreateWithoutChildDependenciesInput.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PollUpdateWithoutChildDependenciesInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutChildDependenciesInputObjectSchema)]),
  create: z.union([z.lazy(() => PollCreateWithoutChildDependenciesInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutChildDependenciesInputObjectSchema)]),
  where: z.lazy(() => PollWhereInputObjectSchema).optional()
}).strict();
export const PollUpsertWithoutChildDependenciesInputObjectSchema: z.ZodType<Prisma.PollUpsertWithoutChildDependenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpsertWithoutChildDependenciesInput>;
export const PollUpsertWithoutChildDependenciesInputObjectZodSchema = makeSchema();
