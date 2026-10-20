import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateOneRequiredWithoutPollTemplatesNestedInputObjectSchema as UserUpdateOneRequiredWithoutPollTemplatesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPollTemplatesNestedInput.schema';
import { PollUpdateOneRequiredWithoutPollTemplatesNestedInputObjectSchema as PollUpdateOneRequiredWithoutPollTemplatesNestedInputObjectSchema } from './PollUpdateOneRequiredWithoutPollTemplatesNestedInput.schema'

const makeSchema = () => z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutPollTemplatesNestedInputObjectSchema).optional(),
  poll: z.lazy(() => PollUpdateOneRequiredWithoutPollTemplatesNestedInputObjectSchema).optional()
}).strict();
export const PollTemplateUpdateInputObjectSchema: z.ZodType<Prisma.PollTemplateUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUpdateInput>;
export const PollTemplateUpdateInputObjectZodSchema = makeSchema();
