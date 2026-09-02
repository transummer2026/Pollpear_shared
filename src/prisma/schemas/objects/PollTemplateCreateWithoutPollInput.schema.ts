import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { UserCreateNestedOneWithoutPollTemplatesInputObjectSchema as UserCreateNestedOneWithoutPollTemplatesInputObjectSchema } from './UserCreateNestedOneWithoutPollTemplatesInput.schema'

const makeSchema = () => z.object({
  user: z.lazy(() => UserCreateNestedOneWithoutPollTemplatesInputObjectSchema)
}).strict();
export const PollTemplateCreateWithoutPollInputObjectSchema: z.ZodType<Prisma.PollTemplateCreateWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateCreateWithoutPollInput>;
export const PollTemplateCreateWithoutPollInputObjectZodSchema = makeSchema();
