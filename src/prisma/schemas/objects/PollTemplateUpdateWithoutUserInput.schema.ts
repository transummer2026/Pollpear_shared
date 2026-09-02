import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollUpdateOneRequiredWithoutPollTemplatesNestedInputObjectSchema as PollUpdateOneRequiredWithoutPollTemplatesNestedInputObjectSchema } from './PollUpdateOneRequiredWithoutPollTemplatesNestedInput.schema'

const makeSchema = () => z.object({
  poll: z.lazy(() => PollUpdateOneRequiredWithoutPollTemplatesNestedInputObjectSchema).optional()
}).strict();
export const PollTemplateUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.PollTemplateUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUpdateWithoutUserInput>;
export const PollTemplateUpdateWithoutUserInputObjectZodSchema = makeSchema();
