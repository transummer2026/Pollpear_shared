import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema';
import { PollUpdateWithoutChildDependenciesInputObjectSchema as PollUpdateWithoutChildDependenciesInputObjectSchema } from './PollUpdateWithoutChildDependenciesInput.schema';
import { PollUncheckedUpdateWithoutChildDependenciesInputObjectSchema as PollUncheckedUpdateWithoutChildDependenciesInputObjectSchema } from './PollUncheckedUpdateWithoutChildDependenciesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PollUpdateWithoutChildDependenciesInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutChildDependenciesInputObjectSchema)])
}).strict();
export const PollUpdateToOneWithWhereWithoutChildDependenciesInputObjectSchema: z.ZodType<Prisma.PollUpdateToOneWithWhereWithoutChildDependenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateToOneWithWhereWithoutChildDependenciesInput>;
export const PollUpdateToOneWithWhereWithoutChildDependenciesInputObjectZodSchema = makeSchema();
