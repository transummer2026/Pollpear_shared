import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateNestedOneWithoutPollTemplatesInputObjectSchema as PollCreateNestedOneWithoutPollTemplatesInputObjectSchema } from './PollCreateNestedOneWithoutPollTemplatesInput.schema'

const makeSchema = () => z.object({
  poll: z.lazy(() => PollCreateNestedOneWithoutPollTemplatesInputObjectSchema)
}).strict();
export const PollTemplateCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.PollTemplateCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateCreateWithoutUserInput>;
export const PollTemplateCreateWithoutUserInputObjectZodSchema = makeSchema();
