import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserUpdateOneRequiredWithoutPollTemplatesNestedInputObjectSchema as UserUpdateOneRequiredWithoutPollTemplatesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPollTemplatesNestedInput.schema'

const makeSchema = () => z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutPollTemplatesNestedInputObjectSchema).optional()
}).strict();
export const PollTemplateUpdateWithoutPollInputObjectSchema: z.ZodType<Prisma.PollTemplateUpdateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUpdateWithoutPollInput>;
export const PollTemplateUpdateWithoutPollInputObjectZodSchema = makeSchema();
