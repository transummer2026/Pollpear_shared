import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionCreateWithoutReportsInputObjectSchema as OptionCreateWithoutReportsInputObjectSchema } from './OptionCreateWithoutReportsInput.schema';
import { OptionUncheckedCreateWithoutReportsInputObjectSchema as OptionUncheckedCreateWithoutReportsInputObjectSchema } from './OptionUncheckedCreateWithoutReportsInput.schema';
import { OptionCreateOrConnectWithoutReportsInputObjectSchema as OptionCreateOrConnectWithoutReportsInputObjectSchema } from './OptionCreateOrConnectWithoutReportsInput.schema';
import { OptionUpsertWithoutReportsInputObjectSchema as OptionUpsertWithoutReportsInputObjectSchema } from './OptionUpsertWithoutReportsInput.schema';
import { OptionWhereInputObjectSchema as OptionWhereInputObjectSchema } from './OptionWhereInput.schema';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema';
import { OptionUpdateToOneWithWhereWithoutReportsInputObjectSchema as OptionUpdateToOneWithWhereWithoutReportsInputObjectSchema } from './OptionUpdateToOneWithWhereWithoutReportsInput.schema';
import { OptionUpdateWithoutReportsInputObjectSchema as OptionUpdateWithoutReportsInputObjectSchema } from './OptionUpdateWithoutReportsInput.schema';
import { OptionUncheckedUpdateWithoutReportsInputObjectSchema as OptionUncheckedUpdateWithoutReportsInputObjectSchema } from './OptionUncheckedUpdateWithoutReportsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OptionCreateWithoutReportsInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OptionCreateOrConnectWithoutReportsInputObjectSchema).optional(),
  upsert: z.lazy(() => OptionUpsertWithoutReportsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => OptionWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => OptionWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => OptionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => OptionUpdateToOneWithWhereWithoutReportsInputObjectSchema), z.lazy(() => OptionUpdateWithoutReportsInputObjectSchema), z.lazy(() => OptionUncheckedUpdateWithoutReportsInputObjectSchema)]).optional()
}).strict();
export const OptionUpdateOneWithoutReportsNestedInputObjectSchema: z.ZodType<Prisma.OptionUpdateOneWithoutReportsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionUpdateOneWithoutReportsNestedInput>;
export const OptionUpdateOneWithoutReportsNestedInputObjectZodSchema = makeSchema();
