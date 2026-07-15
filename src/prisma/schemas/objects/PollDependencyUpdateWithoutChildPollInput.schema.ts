import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionUpdateOneRequiredWithoutPollDependenciesNestedInputObjectSchema as OptionUpdateOneRequiredWithoutPollDependenciesNestedInputObjectSchema } from './OptionUpdateOneRequiredWithoutPollDependenciesNestedInput.schema'

const makeSchema = () => z.object({
  option: z.lazy(() => OptionUpdateOneRequiredWithoutPollDependenciesNestedInputObjectSchema).optional()
}).strict();
export const PollDependencyUpdateWithoutChildPollInputObjectSchema: z.ZodType<Prisma.PollDependencyUpdateWithoutChildPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollDependencyUpdateWithoutChildPollInput>;
export const PollDependencyUpdateWithoutChildPollInputObjectZodSchema = makeSchema();
