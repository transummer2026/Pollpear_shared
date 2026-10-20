import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateNestedOneWithoutChildDependenciesInputObjectSchema as PollCreateNestedOneWithoutChildDependenciesInputObjectSchema } from './PollCreateNestedOneWithoutChildDependenciesInput.schema';
import { OptionCreateNestedOneWithoutPollDependenciesInputObjectSchema as OptionCreateNestedOneWithoutPollDependenciesInputObjectSchema } from './OptionCreateNestedOneWithoutPollDependenciesInput.schema'

const makeSchema = () => z.object({
  childPoll: z.lazy(() => PollCreateNestedOneWithoutChildDependenciesInputObjectSchema),
  option: z.lazy(() => OptionCreateNestedOneWithoutPollDependenciesInputObjectSchema)
}).strict();
export const PollDependencyCreateInputObjectSchema: z.ZodType<Prisma.PollDependencyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyCreateInput>;
export const PollDependencyCreateInputObjectZodSchema = makeSchema();
