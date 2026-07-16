import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema';
import { PollUpdateWithoutPollTemplatesInputObjectSchema as PollUpdateWithoutPollTemplatesInputObjectSchema } from './PollUpdateWithoutPollTemplatesInput.schema';
import { PollUncheckedUpdateWithoutPollTemplatesInputObjectSchema as PollUncheckedUpdateWithoutPollTemplatesInputObjectSchema } from './PollUncheckedUpdateWithoutPollTemplatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PollUpdateWithoutPollTemplatesInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutPollTemplatesInputObjectSchema)])
}).strict();
export const PollUpdateToOneWithWhereWithoutPollTemplatesInputObjectSchema: z.ZodType<Prisma.PollUpdateToOneWithWhereWithoutPollTemplatesInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateToOneWithWhereWithoutPollTemplatesInput>;
export const PollUpdateToOneWithWhereWithoutPollTemplatesInputObjectZodSchema = makeSchema();
