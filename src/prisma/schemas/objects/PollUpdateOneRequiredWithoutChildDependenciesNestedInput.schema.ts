import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutChildDependenciesInputObjectSchema as PollCreateWithoutChildDependenciesInputObjectSchema } from './PollCreateWithoutChildDependenciesInput.schema';
import { PollUncheckedCreateWithoutChildDependenciesInputObjectSchema as PollUncheckedCreateWithoutChildDependenciesInputObjectSchema } from './PollUncheckedCreateWithoutChildDependenciesInput.schema';
import { PollCreateOrConnectWithoutChildDependenciesInputObjectSchema as PollCreateOrConnectWithoutChildDependenciesInputObjectSchema } from './PollCreateOrConnectWithoutChildDependenciesInput.schema';
import { PollUpsertWithoutChildDependenciesInputObjectSchema as PollUpsertWithoutChildDependenciesInputObjectSchema } from './PollUpsertWithoutChildDependenciesInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollUpdateToOneWithWhereWithoutChildDependenciesInputObjectSchema as PollUpdateToOneWithWhereWithoutChildDependenciesInputObjectSchema } from './PollUpdateToOneWithWhereWithoutChildDependenciesInput.schema';
import { PollUpdateWithoutChildDependenciesInputObjectSchema as PollUpdateWithoutChildDependenciesInputObjectSchema } from './PollUpdateWithoutChildDependenciesInput.schema';
import { PollUncheckedUpdateWithoutChildDependenciesInputObjectSchema as PollUncheckedUpdateWithoutChildDependenciesInputObjectSchema } from './PollUncheckedUpdateWithoutChildDependenciesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutChildDependenciesInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutChildDependenciesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PollCreateOrConnectWithoutChildDependenciesInputObjectSchema).optional(),
  upsert: z.lazy(() => PollUpsertWithoutChildDependenciesInputObjectSchema).optional(),
  connect: z.lazy(() => PollWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PollUpdateToOneWithWhereWithoutChildDependenciesInputObjectSchema), z.lazy(() => PollUpdateWithoutChildDependenciesInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutChildDependenciesInputObjectSchema)]).optional()
}).strict();
export const PollUpdateOneRequiredWithoutChildDependenciesNestedInputObjectSchema: z.ZodType<Prisma.PollUpdateOneRequiredWithoutChildDependenciesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateOneRequiredWithoutChildDependenciesNestedInput>;
export const PollUpdateOneRequiredWithoutChildDependenciesNestedInputObjectZodSchema = makeSchema();
