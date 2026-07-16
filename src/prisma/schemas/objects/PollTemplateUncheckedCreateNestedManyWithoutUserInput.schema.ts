import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateCreateWithoutUserInputObjectSchema as PollTemplateCreateWithoutUserInputObjectSchema } from './PollTemplateCreateWithoutUserInput.schema';
import { PollTemplateUncheckedCreateWithoutUserInputObjectSchema as PollTemplateUncheckedCreateWithoutUserInputObjectSchema } from './PollTemplateUncheckedCreateWithoutUserInput.schema';
import { PollTemplateCreateOrConnectWithoutUserInputObjectSchema as PollTemplateCreateOrConnectWithoutUserInputObjectSchema } from './PollTemplateCreateOrConnectWithoutUserInput.schema';
import { PollTemplateCreateManyUserInputEnvelopeObjectSchema as PollTemplateCreateManyUserInputEnvelopeObjectSchema } from './PollTemplateCreateManyUserInputEnvelope.schema';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './PollTemplateWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollTemplateCreateWithoutUserInputObjectSchema), z.lazy(() => PollTemplateCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PollTemplateUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PollTemplateUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PollTemplateCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PollTemplateCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PollTemplateCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PollTemplateWhereUniqueInputObjectSchema), z.lazy(() => PollTemplateWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PollTemplateUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.PollTemplateUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateUncheckedCreateNestedManyWithoutUserInput>;
export const PollTemplateUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
