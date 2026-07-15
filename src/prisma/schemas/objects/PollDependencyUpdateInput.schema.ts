import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollUpdateOneRequiredWithoutChildDependenciesNestedInputObjectSchema as PollUpdateOneRequiredWithoutChildDependenciesNestedInputObjectSchema } from './PollUpdateOneRequiredWithoutChildDependenciesNestedInput.schema';
import { OptionUpdateOneRequiredWithoutPollDependenciesNestedInputObjectSchema as OptionUpdateOneRequiredWithoutPollDependenciesNestedInputObjectSchema } from './OptionUpdateOneRequiredWithoutPollDependenciesNestedInput.schema'

const makeSchema = () => z.object({
  childPoll: z.lazy(() => PollUpdateOneRequiredWithoutChildDependenciesNestedInputObjectSchema).optional(),
  option: z.lazy(() => OptionUpdateOneRequiredWithoutPollDependenciesNestedInputObjectSchema).optional()
}).strict();
export const PollDependencyUpdateInputObjectSchema: z.ZodType<Prisma.PollDependencyUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUpdateInput>;
export const PollDependencyUpdateInputObjectZodSchema = makeSchema();
