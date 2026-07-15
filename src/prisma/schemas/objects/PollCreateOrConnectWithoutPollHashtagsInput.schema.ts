import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollCreateWithoutPollHashtagsInputObjectSchema as PollCreateWithoutPollHashtagsInputObjectSchema } from './PollCreateWithoutPollHashtagsInput.schema';
import { PollUncheckedCreateWithoutPollHashtagsInputObjectSchema as PollUncheckedCreateWithoutPollHashtagsInputObjectSchema } from './PollUncheckedCreateWithoutPollHashtagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PollCreateWithoutPollHashtagsInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutPollHashtagsInputObjectSchema)])
}).strict();
export const PollCreateOrConnectWithoutPollHashtagsInputObjectSchema: z.ZodType<Prisma.PollCreateOrConnectWithoutPollHashtagsInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateOrConnectWithoutPollHashtagsInput>;
export const PollCreateOrConnectWithoutPollHashtagsInputObjectZodSchema = makeSchema();
