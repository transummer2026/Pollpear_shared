import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutPollHashtagsInputObjectSchema as PollCreateWithoutPollHashtagsInputObjectSchema } from './PollCreateWithoutPollHashtagsInput.schema';
import { PollUncheckedCreateWithoutPollHashtagsInputObjectSchema as PollUncheckedCreateWithoutPollHashtagsInputObjectSchema } from './PollUncheckedCreateWithoutPollHashtagsInput.schema';
import { PollCreateOrConnectWithoutPollHashtagsInputObjectSchema as PollCreateOrConnectWithoutPollHashtagsInputObjectSchema } from './PollCreateOrConnectWithoutPollHashtagsInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutPollHashtagsInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutPollHashtagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PollCreateOrConnectWithoutPollHashtagsInputObjectSchema).optional(),
  connect: z.lazy(() => PollWhereUniqueInputObjectSchema).optional()
}).strict();
export const PollCreateNestedOneWithoutPollHashtagsInputObjectSchema: z.ZodType<Prisma.PollCreateNestedOneWithoutPollHashtagsInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateNestedOneWithoutPollHashtagsInput>;
export const PollCreateNestedOneWithoutPollHashtagsInputObjectZodSchema = makeSchema();
