import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionUpdateWithoutReportsInputObjectSchema as OptionUpdateWithoutReportsInputObjectSchema } from './OptionUpdateWithoutReportsInput.schema';
import { OptionUncheckedUpdateWithoutReportsInputObjectSchema as OptionUncheckedUpdateWithoutReportsInputObjectSchema } from './OptionUncheckedUpdateWithoutReportsInput.schema';
import { OptionCreateWithoutReportsInputObjectSchema as OptionCreateWithoutReportsInputObjectSchema } from './OptionCreateWithoutReportsInput.schema';
import { OptionUncheckedCreateWithoutReportsInputObjectSchema as OptionUncheckedCreateWithoutReportsInputObjectSchema } from './OptionUncheckedCreateWithoutReportsInput.schema';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './OptionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => OptionUpdateWithoutReportsInputObjectSchema), z.lazy(() => OptionUncheckedUpdateWithoutReportsInputObjectSchema)]),
  create: z.union([z.lazy(() => OptionCreateWithoutReportsInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutReportsInputObjectSchema)]),
  where: z.lazy(() => OptionWhereInputObjectSchema).optional()
}).strict();
export const OptionUpsertWithoutReportsInputObjectSchema: z.ZodType<Prisma.OptionUpsertWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpsertWithoutReportsInput>;
export const OptionUpsertWithoutReportsInputObjectZodSchema = makeSchema();
