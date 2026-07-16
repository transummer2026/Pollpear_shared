import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagWhereUniqueInputObjectSchema as HashtagWhereUniqueInputObjectSchema } from './HashtagWhereUniqueInput.schema';
import { HashtagCreateWithoutReportsInputObjectSchema as HashtagCreateWithoutReportsInputObjectSchema } from './HashtagCreateWithoutReportsInput.schema';
import { HashtagUncheckedCreateWithoutReportsInputObjectSchema as HashtagUncheckedCreateWithoutReportsInputObjectSchema } from './HashtagUncheckedCreateWithoutReportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HashtagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HashtagCreateWithoutReportsInputObjectSchema), z.lazy(() => HashtagUncheckedCreateWithoutReportsInputObjectSchema)])
}).strict();
export const HashtagCreateOrConnectWithoutReportsInputObjectSchema: z.ZodType<Prisma.HashtagCreateOrConnectWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagCreateOrConnectWithoutReportsInput>;
export const HashtagCreateOrConnectWithoutReportsInputObjectZodSchema = makeSchema();
