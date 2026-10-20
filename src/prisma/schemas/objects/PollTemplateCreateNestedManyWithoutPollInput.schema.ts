import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateCreateWithoutPollInputObjectSchema as PollTemplateCreateWithoutPollInputObjectSchema } from './PollTemplateCreateWithoutPollInput.schema';
import { PollTemplateUncheckedCreateWithoutPollInputObjectSchema as PollTemplateUncheckedCreateWithoutPollInputObjectSchema } from './PollTemplateUncheckedCreateWithoutPollInput.schema';
import { PollTemplateCreateOrConnectWithoutPollInputObjectSchema as PollTemplateCreateOrConnectWithoutPollInputObjectSchema } from './PollTemplateCreateOrConnectWithoutPollInput.schema';
import { PollTemplateCreateManyPollInputEnvelopeObjectSchema as PollTemplateCreateManyPollInputEnvelopeObjectSchema } from './PollTemplateCreateManyPollInputEnvelope.schema';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './PollTemplateWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollTemplateCreateWithoutPollInputObjectSchema), z.lazy(() => PollTemplateCreateWithoutPollInputObjectSchema).array(), z.lazy(() => PollTemplateUncheckedCreateWithoutPollInputObjectSchema), z.lazy(() => PollTemplateUncheckedCreateWithoutPollInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollTemplateCreateOrConnectWithoutPollInputObjectSchema), z.lazy(() => PollTemplateCreateOrConnectWithoutPollInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollTemplateCreateManyPollInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PollTemplateWhereUniqueInputObjectSchema), z.lazy(() => PollTemplateWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PollTemplateCreateNestedManyWithoutPollInputObjectSchema: z.ZodType<Prisma.PollTemplateCreateNestedManyWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateCreateNestedManyWithoutPollInput>;
export const PollTemplateCreateNestedManyWithoutPollInputObjectZodSchema = makeSchema();
