import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutPollTemplatesInputObjectSchema as PollCreateWithoutPollTemplatesInputObjectSchema } from './PollCreateWithoutPollTemplatesInput.schema';
import { PollUncheckedCreateWithoutPollTemplatesInputObjectSchema as PollUncheckedCreateWithoutPollTemplatesInputObjectSchema } from './PollUncheckedCreateWithoutPollTemplatesInput.schema';
import { PollCreateOrConnectWithoutPollTemplatesInputObjectSchema as PollCreateOrConnectWithoutPollTemplatesInputObjectSchema } from './PollCreateOrConnectWithoutPollTemplatesInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutPollTemplatesInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutPollTemplatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PollCreateOrConnectWithoutPollTemplatesInputObjectSchema).optional(),
  connect: z.lazy(() => PollWhereUniqueInputObjectSchema).optional()
}).strict();
export const PollCreateNestedOneWithoutPollTemplatesInputObjectSchema: z.ZodType<Prisma.PollCreateNestedOneWithoutPollTemplatesInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateNestedOneWithoutPollTemplatesInput>;
export const PollCreateNestedOneWithoutPollTemplatesInputObjectZodSchema = makeSchema();
