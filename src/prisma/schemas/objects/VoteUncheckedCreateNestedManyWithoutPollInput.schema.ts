import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteCreateWithoutPollInputObjectSchema as VoteCreateWithoutPollInputObjectSchema } from './VoteCreateWithoutPollInput.schema';
import { VoteUncheckedCreateWithoutPollInputObjectSchema as VoteUncheckedCreateWithoutPollInputObjectSchema } from './VoteUncheckedCreateWithoutPollInput.schema';
import { VoteCreateOrConnectWithoutPollInputObjectSchema as VoteCreateOrConnectWithoutPollInputObjectSchema } from './VoteCreateOrConnectWithoutPollInput.schema';
import { VoteCreateManyPollInputEnvelopeObjectSchema as VoteCreateManyPollInputEnvelopeObjectSchema } from './VoteCreateManyPollInputEnvelope.schema';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VoteCreateWithoutPollInputObjectSchema), z.lazy(() => VoteCreateWithoutPollInputObjectSchema).array(), z.lazy(() => VoteUncheckedCreateWithoutPollInputObjectSchema), z.lazy(() => VoteUncheckedCreateWithoutPollInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VoteCreateOrConnectWithoutPollInputObjectSchema), z.lazy(() => VoteCreateOrConnectWithoutPollInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VoteCreateManyPollInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VoteWhereUniqueInputObjectSchema), z.lazy(() => VoteWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VoteUncheckedCreateNestedManyWithoutPollInputObjectSchema: z.ZodType<Prisma.VoteUncheckedCreateNestedManyWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUncheckedCreateNestedManyWithoutPollInput>;
export const VoteUncheckedCreateNestedManyWithoutPollInputObjectZodSchema = makeSchema();
