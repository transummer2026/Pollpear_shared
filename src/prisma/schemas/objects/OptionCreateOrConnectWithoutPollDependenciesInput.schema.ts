import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema';
import { OptionCreateWithoutPollDependenciesInputObjectSchema as OptionCreateWithoutPollDependenciesInputObjectSchema } from './OptionCreateWithoutPollDependenciesInput.schema';
import { OptionUncheckedCreateWithoutPollDependenciesInputObjectSchema as OptionUncheckedCreateWithoutPollDependenciesInputObjectSchema } from './OptionUncheckedCreateWithoutPollDependenciesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OptionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OptionCreateWithoutPollDependenciesInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutPollDependenciesInputObjectSchema)])
}).strict();
export const OptionCreateOrConnectWithoutPollDependenciesInputObjectSchema: z.ZodType<Prisma.OptionCreateOrConnectWithoutPollDependenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionCreateOrConnectWithoutPollDependenciesInput>;
export const OptionCreateOrConnectWithoutPollDependenciesInputObjectZodSchema = makeSchema();
