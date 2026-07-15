import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollCreateWithoutChildDependenciesInputObjectSchema as PollCreateWithoutChildDependenciesInputObjectSchema } from './PollCreateWithoutChildDependenciesInput.schema';
import { PollUncheckedCreateWithoutChildDependenciesInputObjectSchema as PollUncheckedCreateWithoutChildDependenciesInputObjectSchema } from './PollUncheckedCreateWithoutChildDependenciesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PollCreateWithoutChildDependenciesInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutChildDependenciesInputObjectSchema)])
}).strict();
export const PollCreateOrConnectWithoutChildDependenciesInputObjectSchema: z.ZodType<Prisma.PollCreateOrConnectWithoutChildDependenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateOrConnectWithoutChildDependenciesInput>;
export const PollCreateOrConnectWithoutChildDependenciesInputObjectZodSchema = makeSchema();
