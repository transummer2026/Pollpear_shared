import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollCreateWithoutPollTemplatesInputObjectSchema as PollCreateWithoutPollTemplatesInputObjectSchema } from './PollCreateWithoutPollTemplatesInput.schema';
import { PollUncheckedCreateWithoutPollTemplatesInputObjectSchema as PollUncheckedCreateWithoutPollTemplatesInputObjectSchema } from './PollUncheckedCreateWithoutPollTemplatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PollCreateWithoutPollTemplatesInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutPollTemplatesInputObjectSchema)])
}).strict();
export const PollCreateOrConnectWithoutPollTemplatesInputObjectSchema: z.ZodType<Prisma.PollCreateOrConnectWithoutPollTemplatesInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateOrConnectWithoutPollTemplatesInput>;
export const PollCreateOrConnectWithoutPollTemplatesInputObjectZodSchema = makeSchema();
