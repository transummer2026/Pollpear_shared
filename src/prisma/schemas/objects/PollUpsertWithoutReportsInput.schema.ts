import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollUpdateWithoutReportsInputObjectSchema as PollUpdateWithoutReportsInputObjectSchema } from './PollUpdateWithoutReportsInput.schema';
import { PollUncheckedUpdateWithoutReportsInputObjectSchema as PollUncheckedUpdateWithoutReportsInputObjectSchema } from './PollUncheckedUpdateWithoutReportsInput.schema';
import { PollCreateWithoutReportsInputObjectSchema as PollCreateWithoutReportsInputObjectSchema } from './PollCreateWithoutReportsInput.schema';
import { PollUncheckedCreateWithoutReportsInputObjectSchema as PollUncheckedCreateWithoutReportsInputObjectSchema } from './PollUncheckedCreateWithoutReportsInput.schema';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PollUpdateWithoutReportsInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutReportsInputObjectSchema)]),
  create: z.union([z.lazy(() => PollCreateWithoutReportsInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutReportsInputObjectSchema)]),
  where: z.lazy(() => PollWhereInputObjectSchema).optional()
}).strict();
export const PollUpsertWithoutReportsInputObjectSchema: z.ZodType<Prisma.PollUpsertWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpsertWithoutReportsInput>;
export const PollUpsertWithoutReportsInputObjectZodSchema = makeSchema();
