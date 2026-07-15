import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollHashtagCreateWithoutHashtagInputObjectSchema as PollHashtagCreateWithoutHashtagInputObjectSchema } from './PollHashtagCreateWithoutHashtagInput.schema';
import { PollHashtagUncheckedCreateWithoutHashtagInputObjectSchema as PollHashtagUncheckedCreateWithoutHashtagInputObjectSchema } from './PollHashtagUncheckedCreateWithoutHashtagInput.schema';
import { PollHashtagCreateOrConnectWithoutHashtagInputObjectSchema as PollHashtagCreateOrConnectWithoutHashtagInputObjectSchema } from './PollHashtagCreateOrConnectWithoutHashtagInput.schema';
import { PollHashtagCreateManyHashtagInputEnvelopeObjectSchema as PollHashtagCreateManyHashtagInputEnvelopeObjectSchema } from './PollHashtagCreateManyHashtagInputEnvelope.schema';
import { PollHashtagWhereUniqueInputObjectSchema as PollHashtagWhereUniqueInputObjectSchema } from './PollHashtagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollHashtagCreateWithoutHashtagInputObjectSchema), z.lazy(() => PollHashtagCreateWithoutHashtagInputObjectSchema).array(), z.lazy(() => PollHashtagUncheckedCreateWithoutHashtagInputObjectSchema), z.lazy(() => PollHashtagUncheckedCreateWithoutHashtagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollHashtagCreateOrConnectWithoutHashtagInputObjectSchema), z.lazy(() => PollHashtagCreateOrConnectWithoutHashtagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollHashtagCreateManyHashtagInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PollHashtagWhereUniqueInputObjectSchema), z.lazy(() => PollHashtagWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PollHashtagUncheckedCreateNestedManyWithoutHashtagInputObjectSchema: z.ZodType<Prisma.PollHashtagUncheckedCreateNestedManyWithoutHashtagInput> = makeSchema() as unknown as z.ZodType<Prisma.PollHashtagUncheckedCreateNestedManyWithoutHashtagInput>;
export const PollHashtagUncheckedCreateNestedManyWithoutHashtagInputObjectZodSchema = makeSchema();
