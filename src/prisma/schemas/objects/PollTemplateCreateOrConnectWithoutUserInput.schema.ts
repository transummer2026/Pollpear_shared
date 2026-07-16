import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollTemplateWhereUniqueInputObjectSchema as PollTemplateWhereUniqueInputObjectSchema } from './PollTemplateWhereUniqueInput.schema';
import { PollTemplateCreateWithoutUserInputObjectSchema as PollTemplateCreateWithoutUserInputObjectSchema } from './PollTemplateCreateWithoutUserInput.schema';
import { PollTemplateUncheckedCreateWithoutUserInputObjectSchema as PollTemplateUncheckedCreateWithoutUserInputObjectSchema } from './PollTemplateUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollTemplateWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PollTemplateCreateWithoutUserInputObjectSchema), z.lazy(() => PollTemplateUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PollTemplateCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.PollTemplateCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PollTemplateCreateOrConnectWithoutUserInput>;
export const PollTemplateCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
