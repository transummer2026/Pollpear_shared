import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollUpdateWithoutPollTemplatesInputObjectSchema as PollUpdateWithoutPollTemplatesInputObjectSchema } from './PollUpdateWithoutPollTemplatesInput.schema';
import { PollUncheckedUpdateWithoutPollTemplatesInputObjectSchema as PollUncheckedUpdateWithoutPollTemplatesInputObjectSchema } from './PollUncheckedUpdateWithoutPollTemplatesInput.schema';
import { PollCreateWithoutPollTemplatesInputObjectSchema as PollCreateWithoutPollTemplatesInputObjectSchema } from './PollCreateWithoutPollTemplatesInput.schema';
import { PollUncheckedCreateWithoutPollTemplatesInputObjectSchema as PollUncheckedCreateWithoutPollTemplatesInputObjectSchema } from './PollUncheckedCreateWithoutPollTemplatesInput.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PollUpdateWithoutPollTemplatesInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutPollTemplatesInputObjectSchema)]),
  create: z.union([z.lazy(() => PollCreateWithoutPollTemplatesInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutPollTemplatesInputObjectSchema)]),
  where: z.lazy(() => PollWhereInputObjectSchema).optional()
}).strict();
export const PollUpsertWithoutPollTemplatesInputObjectSchema: z.ZodType<Prisma.PollUpsertWithoutPollTemplatesInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpsertWithoutPollTemplatesInput>;
export const PollUpsertWithoutPollTemplatesInputObjectZodSchema = makeSchema();
