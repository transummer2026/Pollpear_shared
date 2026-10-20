import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './OptionWhereInput.schema';
import { OptionUpdateWithoutReportsInputObjectSchema as OptionUpdateWithoutReportsInputObjectSchema } from './OptionUpdateWithoutReportsInput.schema';
import { OptionUncheckedUpdateWithoutReportsInputObjectSchema as OptionUncheckedUpdateWithoutReportsInputObjectSchema } from './OptionUncheckedUpdateWithoutReportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OptionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => OptionUpdateWithoutReportsInputObjectSchema), z.lazy(() => OptionUncheckedUpdateWithoutReportsInputObjectSchema)])
}).strict();
export const OptionUpdateToOneWithWhereWithoutReportsInputObjectSchema: z.ZodType<Prisma.OptionUpdateToOneWithWhereWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpdateToOneWithWhereWithoutReportsInput>;
export const OptionUpdateToOneWithWhereWithoutReportsInputObjectZodSchema = makeSchema();
