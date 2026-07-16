import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateNestedOneWithoutPollHashtagsInputObjectSchema as PollCreateNestedOneWithoutPollHashtagsInputObjectSchema } from './PollCreateNestedOneWithoutPollHashtagsInput.schema'

const makeSchema = () => z.object({
  poll: z.lazy(() => PollCreateNestedOneWithoutPollHashtagsInputObjectSchema)
}).strict();
export const PollHashtagCreateWithoutHashtagInputObjectSchema: z.ZodType<Prisma.PollHashtagCreateWithoutHashtagInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagCreateWithoutHashtagInput>;
export const PollHashtagCreateWithoutHashtagInputObjectZodSchema = makeSchema();
