import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagCreateWithoutReportsInputObjectSchema as HashtagCreateWithoutReportsInputObjectSchema } from './HashtagCreateWithoutReportsInput.schema';
import { HashtagUncheckedCreateWithoutReportsInputObjectSchema as HashtagUncheckedCreateWithoutReportsInputObjectSchema } from './HashtagUncheckedCreateWithoutReportsInput.schema';
import { HashtagCreateOrConnectWithoutReportsInputObjectSchema as HashtagCreateOrConnectWithoutReportsInputObjectSchema } from './HashtagCreateOrConnectWithoutReportsInput.schema';
import { HashtagWhereUniqueInputObjectSchema as HashtagWhereUniqueInputObjectSchema } from './HashtagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HashtagCreateWithoutReportsInputObjectSchema), z.lazy(() => HashtagUncheckedCreateWithoutReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HashtagCreateOrConnectWithoutReportsInputObjectSchema).optional(),
  connect: z.lazy(() => HashtagWhereUniqueInputObjectSchema).optional()
}).strict();
export const HashtagCreateNestedOneWithoutReportsInputObjectSchema: z.ZodType<Prisma.HashtagCreateNestedOneWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagCreateNestedOneWithoutReportsInput>;
export const HashtagCreateNestedOneWithoutReportsInputObjectZodSchema = makeSchema();
