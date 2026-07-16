import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './PollHashtagWhereUniqueInput.schema';
import { PollHashtagCreateWithoutPollInputObjectSchema as PollHashtagCreateWithoutPollInputObjectSchema } from './PollHashtagCreateWithoutPollInput.schema';
import { PollHashtagUncheckedCreateWithoutPollInputObjectSchema as PollHashtagUncheckedCreateWithoutPollInputObjectSchema } from './PollHashtagUncheckedCreateWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollHashtagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PollHashtagCreateWithoutPollInputObjectSchema), z.lazy(() => PollHashtagUncheckedCreateWithoutPollInputObjectSchema)])
}).strict();
export const PollHashtagCreateOrConnectWithoutPollInputObjectSchema: z.ZodType<Prisma.PollHashtagCreateOrConnectWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagCreateOrConnectWithoutPollInput>;
export const PollHashtagCreateOrConnectWithoutPollInputObjectZodSchema = makeSchema();
