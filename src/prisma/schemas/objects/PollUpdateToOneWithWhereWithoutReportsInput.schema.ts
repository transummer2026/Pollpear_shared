import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereInputObjectSchema as PollWhereInputObjectSchema } from './PollWhereInput.schema';
import { PollUpdateWithoutReportsInputObjectSchema as PollUpdateWithoutReportsInputObjectSchema } from './PollUpdateWithoutReportsInput.schema';
import { PollUncheckedUpdateWithoutReportsInputObjectSchema as PollUncheckedUpdateWithoutReportsInputObjectSchema } from './PollUncheckedUpdateWithoutReportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PollUpdateWithoutReportsInputObjectSchema), z.lazy(() => PollUncheckedUpdateWithoutReportsInputObjectSchema)])
}).strict();
export const PollUpdateToOneWithWhereWithoutReportsInputObjectSchema: z.ZodType<Prisma.PollUpdateToOneWithWhereWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateToOneWithWhereWithoutReportsInput>;
export const PollUpdateToOneWithWhereWithoutReportsInputObjectZodSchema = makeSchema();
