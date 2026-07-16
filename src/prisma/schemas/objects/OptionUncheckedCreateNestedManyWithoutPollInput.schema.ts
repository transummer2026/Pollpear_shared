import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionCreateWithoutPollInputObjectSchema as OptionCreateWithoutPollInputObjectSchema } from './OptionCreateWithoutPollInput.schema';
import { OptionUncheckedCreateWithoutPollInputObjectSchema as OptionUncheckedCreateWithoutPollInputObjectSchema } from './OptionUncheckedCreateWithoutPollInput.schema';
import { OptionCreateOrConnectWithoutPollInputObjectSchema as OptionCreateOrConnectWithoutPollInputObjectSchema } from './OptionCreateOrConnectWithoutPollInput.schema';
import { OptionCreateManyPollInputEnvelopeObjectSchema as OptionCreateManyPollInputEnvelopeObjectSchema } from './OptionCreateManyPollInputEnvelope.schema';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OptionCreateWithoutPollInputObjectSchema), z.lazy(() => OptionCreateWithoutPollInputObjectSchema).array(), z.lazy(() => OptionUncheckedCreateWithoutPollInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutPollInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OptionCreateOrConnectWithoutPollInputObjectSchema), z.lazy(() => OptionCreateOrConnectWithoutPollInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OptionCreateManyPollInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OptionWhereUniqueInputObjectSchema), z.lazy(() => OptionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OptionUncheckedCreateNestedManyWithoutPollInputObjectSchema: z.ZodType<Prisma.OptionUncheckedCreateNestedManyWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUncheckedCreateNestedManyWithoutPollInput>;
export const OptionUncheckedCreateNestedManyWithoutPollInputObjectZodSchema = makeSchema();
