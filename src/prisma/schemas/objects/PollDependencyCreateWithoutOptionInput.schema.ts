import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateNestedOneWithoutChildDependenciesInputObjectSchema as PollCreateNestedOneWithoutChildDependenciesInputObjectSchema } from './PollCreateNestedOneWithoutChildDependenciesInput.schema'

const makeSchema = () => z.object({
  childPoll: z.lazy(() => PollCreateNestedOneWithoutChildDependenciesInputObjectSchema)
}).strict();
export const PollDependencyCreateWithoutOptionInputObjectSchema: z.ZodType<Prisma.PollDependencyCreateWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyCreateWithoutOptionInput>;
export const PollDependencyCreateWithoutOptionInputObjectZodSchema = makeSchema();
