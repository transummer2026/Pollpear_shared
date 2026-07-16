import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollUpdateWithoutCreatedByInputObjectSchema as PollUpdateWithoutCreatedByInputObjectSchema } from './PollUpdateWithoutCreatedByInput.schema';
import { PollUncheckedUpdateWithoutCreatedByInputObjectSchema as PollUncheckedUpdateWithoutCreatedByInputObjectSchema } from './PollUncheckedUpdateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PollUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const PollUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PollUpdateWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateWithWhereUniqueWithoutCreatedByInput>;
export const PollUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
