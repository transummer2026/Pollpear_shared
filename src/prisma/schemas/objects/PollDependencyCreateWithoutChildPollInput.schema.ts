import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionCreateNestedOneWithoutPollDependenciesInputObjectSchema as OptionCreateNestedOneWithoutPollDependenciesInputObjectSchema } from './OptionCreateNestedOneWithoutPollDependenciesInput.schema'

const makeSchema = () => z.object({
  option: z.lazy(() => OptionCreateNestedOneWithoutPollDependenciesInputObjectSchema)
}).strict();
export const PollDependencyCreateWithoutChildPollInputObjectSchema: z.ZodType<Prisma.PollDependencyCreateWithoutChildPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyCreateWithoutChildPollInput>;
export const PollDependencyCreateWithoutChildPollInputObjectZodSchema = makeSchema();
