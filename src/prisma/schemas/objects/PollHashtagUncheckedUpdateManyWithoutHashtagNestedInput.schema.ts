import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagCreateWithoutHashtagInputObjectSchema as PollHashtagCreateWithoutHashtagInputObjectSchema } from './PollHashtagCreateWithoutHashtagInput.schema';
import { PollHashtagUncheckedCreateWithoutHashtagInputObjectSchema as PollHashtagUncheckedCreateWithoutHashtagInputObjectSchema } from './PollHashtagUncheckedCreateWithoutHashtagInput.schema';
import { PollHashtagCreateOrConnectWithoutHashtagInputObjectSchema as PollHashtagCreateOrConnectWithoutHashtagInputObjectSchema } from './PollHashtagCreateOrConnectWithoutHashtagInput.schema';
import { PollHashtagUpsertWithWhereUniqueWithoutHashtagInputObjectSchema as PollHashtagUpsertWithWhereUniqueWithoutHashtagInputObjectSchema } from './PollHashtagUpsertWithWhereUniqueWithoutHashtagInput.schema';
import { PollHashtagCreateManyHashtagInputEnvelopeObjectSchema as PollHashtagCreateManyHashtagInputEnvelopeObjectSchema } from './PollHashtagCreateManyHashtagInputEnvelope.schema';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './PollHashtagWhereUniqueInput.schema';
import { PollHashtagUpdateWithWhereUniqueWithoutHashtagInputObjectSchema as PollHashtagUpdateWithWhereUniqueWithoutHashtagInputObjectSchema } from './PollHashtagUpdateWithWhereUniqueWithoutHashtagInput.schema';
import { PollHashtagUpdateManyWithWhereWithoutHashtagInputObjectSchema as PollHashtagUpdateManyWithWhereWithoutHashtagInputObjectSchema } from './PollHashtagUpdateManyWithWhereWithoutHashtagInput.schema';
import { PollHashtagScalarWhereInputObjectSchema as PollHashtagScalarWhereInputObjectSchema } from './PollHashtagScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollHashtagCreateWithoutHashtagInputObjectSchema), z.lazy(() => PollHashtagCreateWithoutHashtagInputObjectSchema).array(), z.lazy(() => PollHashtagUncheckedCreateWithoutHashtagInputObjectSchema), z.lazy(() => PollHashtagUncheckedCreateWithoutHashtagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollHashtagCreateOrConnectWithoutHashtagInputObjectSchema), z.lazy(() => PollHashtagCreateOrConnectWithoutHashtagInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PollHashtagUpsertWithWhereUniqueWithoutHashtagInputObjectSchema), z.lazy(() => PollHashtagUpsertWithWhereUniqueWithoutHashtagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollHashtagCreateManyHashtagInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PollHashtagWhereUniqueInputObjectSchema), z.lazy(() => PollHashtagWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PollHashtagWhereUniqueInputObjectSchema), z.lazy(() => PollHashtagWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PollHashtagWhereUniqueInputObjectSchema), z.lazy(() => PollHashtagWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PollHashtagWhereUniqueInputObjectSchema), z.lazy(() => PollHashtagWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PollHashtagUpdateWithWhereUniqueWithoutHashtagInputObjectSchema), z.lazy(() => PollHashtagUpdateWithWhereUniqueWithoutHashtagInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PollHashtagUpdateManyWithWhereWithoutHashtagInputObjectSchema), z.lazy(() => PollHashtagUpdateManyWithWhereWithoutHashtagInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PollHashtagScalarWhereInputObjectSchema), z.lazy(() => PollHashtagScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PollHashtagUncheckedUpdateManyWithoutHashtagNestedInputObjectSchema: z.ZodType<Prisma.PollHashtagUncheckedUpdateManyWithoutHashtagNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUncheckedUpdateManyWithoutHashtagNestedInput>;
export const PollHashtagUncheckedUpdateManyWithoutHashtagNestedInputObjectZodSchema = makeSchema();
