import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollUpdateWithoutCreatedByInputObjectSchema as PollUpdateWithoutCreatedByInputObjectSchema } from './PollUpdateWithoutCreatedByInput.schema';
import { PollUncheckedUpdateWithoutCreatedByInputObjectSchema as PollUncheckedUpdateWithoutCreatedByInputObjectSchema } from './PollUncheckedUpdateWithoutCreatedByInput.schema';
import { PollCreateWithoutCreatedByInputObjectSchema as PollCreateWithoutCreatedByInputObjectSchema } from './PollCreateWithoutCreatedByInput.schema';
import { PollUncheckedCreateWithoutCreatedByInputObjectSchema as PollUncheckedCreateWithoutCreatedByInputObjectSchema } from './PollUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PollUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => PollCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const PollUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PollUpsertWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpsertWithWhereUniqueWithoutCreatedByInput>;
export const PollUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
