import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagCreateWithoutPollInputObjectSchema as PollHashtagCreateWithoutPollInputObjectSchema } from './PollHashtagCreateWithoutPollInput.schema';
import { PollHashtagUncheckedCreateWithoutPollInputObjectSchema as PollHashtagUncheckedCreateWithoutPollInputObjectSchema } from './PollHashtagUncheckedCreateWithoutPollInput.schema';
import { PollHashtagCreateOrConnectWithoutPollInputObjectSchema as PollHashtagCreateOrConnectWithoutPollInputObjectSchema } from './PollHashtagCreateOrConnectWithoutPollInput.schema';
import { PollHashtagUpsertWithWhereUniqueWithoutPollInputObjectSchema as PollHashtagUpsertWithWhereUniqueWithoutPollInputObjectSchema } from './PollHashtagUpsertWithWhereUniqueWithoutPollInput.schema';
import { PollHashtagCreateManyPollInputEnvelopeObjectSchema as PollHashtagCreateManyPollInputEnvelopeObjectSchema } from './PollHashtagCreateManyPollInputEnvelope.schema';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './PollHashtagWhereUniqueInput.schema';
import { PollHashtagUpdateWithWhereUniqueWithoutPollInputObjectSchema as PollHashtagUpdateWithWhereUniqueWithoutPollInputObjectSchema } from './PollHashtagUpdateWithWhereUniqueWithoutPollInput.schema';
import { PollHashtagUpdateManyWithWhereWithoutPollInputObjectSchema as PollHashtagUpdateManyWithWhereWithoutPollInputObjectSchema } from './PollHashtagUpdateManyWithWhereWithoutPollInput.schema';
import { PollHashtagScalarWhereInputObjectSchema as PollHashtagScalarWhereInputObjectSchema } from './PollHashtagScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollHashtagCreateWithoutPollInputObjectSchema), z.lazy(() => PollHashtagCreateWithoutPollInputObjectSchema).array(), z.lazy(() => PollHashtagUncheckedCreateWithoutPollInputObjectSchema), z.lazy(() => PollHashtagUncheckedCreateWithoutPollInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollHashtagCreateOrConnectWithoutPollInputObjectSchema), z.lazy(() => PollHashtagCreateOrConnectWithoutPollInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PollHashtagUpsertWithWhereUniqueWithoutPollInputObjectSchema), z.lazy(() => PollHashtagUpsertWithWhereUniqueWithoutPollInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollHashtagCreateManyPollInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PollHashtagWhereUniqueInputObjectSchema), z.lazy(() => PollHashtagWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PollHashtagWhereUniqueInputObjectSchema), z.lazy(() => PollHashtagWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PollHashtagWhereUniqueInputObjectSchema), z.lazy(() => PollHashtagWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PollHashtagWhereUniqueInputObjectSchema), z.lazy(() => PollHashtagWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PollHashtagUpdateWithWhereUniqueWithoutPollInputObjectSchema), z.lazy(() => PollHashtagUpdateWithWhereUniqueWithoutPollInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PollHashtagUpdateManyWithWhereWithoutPollInputObjectSchema), z.lazy(() => PollHashtagUpdateManyWithWhereWithoutPollInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PollHashtagScalarWhereInputObjectSchema), z.lazy(() => PollHashtagScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PollHashtagUpdateManyWithoutPollNestedInputObjectSchema: z.ZodType<Prisma.PollHashtagUpdateManyWithoutPollNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUpdateManyWithoutPollNestedInput>;
export const PollHashtagUpdateManyWithoutPollNestedInputObjectZodSchema = makeSchema();
