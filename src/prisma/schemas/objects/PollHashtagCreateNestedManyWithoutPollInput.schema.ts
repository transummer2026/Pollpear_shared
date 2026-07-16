import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagCreateWithoutPollInputObjectSchema as PollHashtagCreateWithoutPollInputObjectSchema } from './PollHashtagCreateWithoutPollInput.schema';
import { PollHashtagUncheckedCreateWithoutPollInputObjectSchema as PollHashtagUncheckedCreateWithoutPollInputObjectSchema } from './PollHashtagUncheckedCreateWithoutPollInput.schema';
import { PollHashtagCreateOrConnectWithoutPollInputObjectSchema as PollHashtagCreateOrConnectWithoutPollInputObjectSchema } from './PollHashtagCreateOrConnectWithoutPollInput.schema';
import { PollHashtagCreateManyPollInputEnvelopeObjectSchema as PollHashtagCreateManyPollInputEnvelopeObjectSchema } from './PollHashtagCreateManyPollInputEnvelope.schema';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './PollHashtagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollHashtagCreateWithoutPollInputObjectSchema), z.lazy(() => PollHashtagCreateWithoutPollInputObjectSchema).array(), z.lazy(() => PollHashtagUncheckedCreateWithoutPollInputObjectSchema), z.lazy(() => PollHashtagUncheckedCreateWithoutPollInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollHashtagCreateOrConnectWithoutPollInputObjectSchema), z.lazy(() => PollHashtagCreateOrConnectWithoutPollInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollHashtagCreateManyPollInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PollHashtagWhereUniqueInputObjectSchema), z.lazy(() => PollHashtagWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PollHashtagCreateNestedManyWithoutPollInputObjectSchema: z.ZodType<Prisma.PollHashtagCreateNestedManyWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagCreateNestedManyWithoutPollInput>;
export const PollHashtagCreateNestedManyWithoutPollInputObjectZodSchema = makeSchema();
