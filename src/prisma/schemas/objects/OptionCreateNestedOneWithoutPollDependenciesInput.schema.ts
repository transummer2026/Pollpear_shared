import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionCreateWithoutPollDependenciesInputObjectSchema as OptionCreateWithoutPollDependenciesInputObjectSchema } from './OptionCreateWithoutPollDependenciesInput.schema';
import { OptionUncheckedCreateWithoutPollDependenciesInputObjectSchema as OptionUncheckedCreateWithoutPollDependenciesInputObjectSchema } from './OptionUncheckedCreateWithoutPollDependenciesInput.schema';
import { OptionCreateOrConnectWithoutPollDependenciesInputObjectSchema as OptionCreateOrConnectWithoutPollDependenciesInputObjectSchema } from './OptionCreateOrConnectWithoutPollDependenciesInput.schema';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OptionCreateWithoutPollDependenciesInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutPollDependenciesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OptionCreateOrConnectWithoutPollDependenciesInputObjectSchema).optional(),
  connect: z.lazy(() => OptionWhereUniqueInputObjectSchema).optional()
}).strict();
export const OptionCreateNestedOneWithoutPollDependenciesInputObjectSchema: z.ZodType<Prisma.OptionCreateNestedOneWithoutPollDependenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionCreateNestedOneWithoutPollDependenciesInput>;
export const OptionCreateNestedOneWithoutPollDependenciesInputObjectZodSchema = makeSchema();
