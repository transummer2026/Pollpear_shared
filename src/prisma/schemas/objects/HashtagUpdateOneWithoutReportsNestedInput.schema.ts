import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { HashtagCreateWithoutReportsInputObjectSchema as HashtagCreateWithoutReportsInputObjectSchema } from './HashtagCreateWithoutReportsInput.schema';
import { HashtagUncheckedCreateWithoutReportsInputObjectSchema as HashtagUncheckedCreateWithoutReportsInputObjectSchema } from './HashtagUncheckedCreateWithoutReportsInput.schema';
import { HashtagCreateOrConnectWithoutReportsInputObjectSchema as HashtagCreateOrConnectWithoutReportsInputObjectSchema } from './HashtagCreateOrConnectWithoutReportsInput.schema';
import { HashtagUpsertWithoutReportsInputObjectSchema as HashtagUpsertWithoutReportsInputObjectSchema } from './HashtagUpsertWithoutReportsInput.schema';
import { HashtagWhereInputObjectSchema as HashtagWhereInputObjectSchema } from './HashtagWhereInput.schema';
import { HashtagWhereUniqueInputObjectSchema as HashtagWhereUniqueInputObjectSchema } from './HashtagWhereUniqueInput.schema';
import { HashtagUpdateToOneWithWhereWithoutReportsInputObjectSchema as HashtagUpdateToOneWithWhereWithoutReportsInputObjectSchema } from './HashtagUpdateToOneWithWhereWithoutReportsInput.schema';
import { HashtagUpdateWithoutReportsInputObjectSchema as HashtagUpdateWithoutReportsInputObjectSchema } from './HashtagUpdateWithoutReportsInput.schema';
import { HashtagUncheckedUpdateWithoutReportsInputObjectSchema as HashtagUncheckedUpdateWithoutReportsInputObjectSchema } from './HashtagUncheckedUpdateWithoutReportsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HashtagCreateWithoutReportsInputObjectSchema), z.lazy(() => HashtagUncheckedCreateWithoutReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HashtagCreateOrConnectWithoutReportsInputObjectSchema).optional(),
  upsert: z.lazy(() => HashtagUpsertWithoutReportsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => HashtagWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => HashtagWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => HashtagWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => HashtagUpdateToOneWithWhereWithoutReportsInputObjectSchema), z.lazy(() => HashtagUpdateWithoutReportsInputObjectSchema), z.lazy(() => HashtagUncheckedUpdateWithoutReportsInputObjectSchema)]).optional()
}).strict();
export const HashtagUpdateOneWithoutReportsNestedInputObjectSchema: z.ZodType<Prisma.HashtagUpdateOneWithoutReportsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.HashtagUpdateOneWithoutReportsNestedInput>;
export const HashtagUpdateOneWithoutReportsNestedInputObjectZodSchema = makeSchema();
