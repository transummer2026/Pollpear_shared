import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './PollTemplateWhereUniqueInput.schema';
import { PollTemplateCreateWithoutPollInputObjectSchema as PollTemplateCreateWithoutPollInputObjectSchema } from './PollTemplateCreateWithoutPollInput.schema';
import { PollTemplateUncheckedCreateWithoutPollInputObjectSchema as PollTemplateUncheckedCreateWithoutPollInputObjectSchema } from './PollTemplateUncheckedCreateWithoutPollInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollTemplateWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PollTemplateCreateWithoutPollInputObjectSchema), z.lazy(() => PollTemplateUncheckedCreateWithoutPollInputObjectSchema)])
}).strict();
export const PollTemplateCreateOrConnectWithoutPollInputObjectSchema: z.ZodType<Prisma.PollTemplateCreateOrConnectWithoutPollInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateCreateOrConnectWithoutPollInput>;
export const PollTemplateCreateOrConnectWithoutPollInputObjectZodSchema = makeSchema();
