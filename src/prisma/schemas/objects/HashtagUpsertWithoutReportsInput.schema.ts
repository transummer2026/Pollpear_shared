import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagUpdateWithoutReportsInputObjectSchema as HashtagUpdateWithoutReportsInputObjectSchema } from './HashtagUpdateWithoutReportsInput.schema';
import { HashtagUncheckedUpdateWithoutReportsInputObjectSchema as HashtagUncheckedUpdateWithoutReportsInputObjectSchema } from './HashtagUncheckedUpdateWithoutReportsInput.schema';
import { HashtagCreateWithoutReportsInputObjectSchema as HashtagCreateWithoutReportsInputObjectSchema } from './HashtagCreateWithoutReportsInput.schema';
import { HashtagUncheckedCreateWithoutReportsInputObjectSchema as HashtagUncheckedCreateWithoutReportsInputObjectSchema } from './HashtagUncheckedCreateWithoutReportsInput.schema';
import { HashtagWhereInputObjectSchema as HashtagWhereInputObjectSchema } from './HashtagWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => HashtagUpdateWithoutReportsInputObjectSchema), z.lazy(() => HashtagUncheckedUpdateWithoutReportsInputObjectSchema)]),
  create: z.union([z.lazy(() => HashtagCreateWithoutReportsInputObjectSchema), z.lazy(() => HashtagUncheckedCreateWithoutReportsInputObjectSchema)]),
  where: z.lazy(() => HashtagWhereInputObjectSchema).optional()
}).strict();
export const HashtagUpsertWithoutReportsInputObjectSchema: z.ZodType<Prisma.HashtagUpsertWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUpsertWithoutReportsInput>;
export const HashtagUpsertWithoutReportsInputObjectZodSchema = makeSchema();
