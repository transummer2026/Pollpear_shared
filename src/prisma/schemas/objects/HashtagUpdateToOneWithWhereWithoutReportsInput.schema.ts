import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagWhereInputObjectSchema as HashtagWhereInputObjectSchema } from './HashtagWhereInput.schema';
import { HashtagUpdateWithoutReportsInputObjectSchema as HashtagUpdateWithoutReportsInputObjectSchema } from './HashtagUpdateWithoutReportsInput.schema';
import { HashtagUncheckedUpdateWithoutReportsInputObjectSchema as HashtagUncheckedUpdateWithoutReportsInputObjectSchema } from './HashtagUncheckedUpdateWithoutReportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HashtagWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => HashtagUpdateWithoutReportsInputObjectSchema), z.lazy(() => HashtagUncheckedUpdateWithoutReportsInputObjectSchema)])
}).strict();
export const HashtagUpdateToOneWithWhereWithoutReportsInputObjectSchema: z.ZodType<Prisma.HashtagUpdateToOneWithWhereWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUpdateToOneWithWhereWithoutReportsInput>;
export const HashtagUpdateToOneWithWhereWithoutReportsInputObjectZodSchema = makeSchema();
