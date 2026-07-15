import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutPollTemplatesInputObjectSchema as UserCreateNestedOneWithoutPollTemplatesInputObjectSchema } from './UserCreateNestedOneWithoutPollTemplatesInput.schema';
import { PollCreateNestedOneWithoutPollTemplatesInputObjectSchema as PollCreateNestedOneWithoutPollTemplatesInputObjectSchema } from './PollCreateNestedOneWithoutPollTemplatesInput.schema'

const makeSchema = () => z.object({
  user: z.lazy(() => UserCreateNestedOneWithoutPollTemplatesInputObjectSchema),
  poll: z.lazy(() => PollCreateNestedOneWithoutPollTemplatesInputObjectSchema)
}).strict();
export const PollTemplateCreateInputObjectSchema: z.ZodType<Prisma.PollTemplateCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateCreateInput>;
export const PollTemplateCreateInputObjectZodSchema = makeSchema();
