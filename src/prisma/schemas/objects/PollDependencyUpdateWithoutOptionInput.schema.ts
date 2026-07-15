import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollUpdateOneRequiredWithoutChildDependenciesNestedInputObjectSchema as PollUpdateOneRequiredWithoutChildDependenciesNestedInputObjectSchema } from './PollUpdateOneRequiredWithoutChildDependenciesNestedInput.schema'

const makeSchema = () => z.object({
  childPoll: z.lazy(() => PollUpdateOneRequiredWithoutChildDependenciesNestedInputObjectSchema).optional()
}).strict();
export const PollDependencyUpdateWithoutOptionInputObjectSchema: z.ZodType<Prisma.PollDependencyUpdateWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUpdateWithoutOptionInput>;
export const PollDependencyUpdateWithoutOptionInputObjectZodSchema = makeSchema();
