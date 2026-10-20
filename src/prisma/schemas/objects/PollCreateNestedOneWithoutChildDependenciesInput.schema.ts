import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutChildDependenciesInputObjectSchema as PollCreateWithoutChildDependenciesInputObjectSchema } from './PollCreateWithoutChildDependenciesInput.schema';
import { PollUncheckedCreateWithoutChildDependenciesInputObjectSchema as PollUncheckedCreateWithoutChildDependenciesInputObjectSchema } from './PollUncheckedCreateWithoutChildDependenciesInput.schema';
import { PollCreateOrConnectWithoutChildDependenciesInputObjectSchema as PollCreateOrConnectWithoutChildDependenciesInputObjectSchema } from './PollCreateOrConnectWithoutChildDependenciesInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutChildDependenciesInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutChildDependenciesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PollCreateOrConnectWithoutChildDependenciesInputObjectSchema).optional(),
  connect: z.lazy(() => PollWhereUniqueInputObjectSchema).optional()
}).strict();
export const PollCreateNestedOneWithoutChildDependenciesInputObjectSchema: z.ZodType<Prisma.PollCreateNestedOneWithoutChildDependenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateNestedOneWithoutChildDependenciesInput>;
export const PollCreateNestedOneWithoutChildDependenciesInputObjectZodSchema = makeSchema();
