import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionCreateWithoutReportsInputObjectSchema as OptionCreateWithoutReportsInputObjectSchema } from './OptionCreateWithoutReportsInput.schema';
import { OptionUncheckedCreateWithoutReportsInputObjectSchema as OptionUncheckedCreateWithoutReportsInputObjectSchema } from './OptionUncheckedCreateWithoutReportsInput.schema';
import { OptionCreateOrConnectWithoutReportsInputObjectSchema as OptionCreateOrConnectWithoutReportsInputObjectSchema } from './OptionCreateOrConnectWithoutReportsInput.schema';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OptionCreateWithoutReportsInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => OptionCreateOrConnectWithoutReportsInputObjectSchema).optional(),
  connect: z.lazy(() => OptionWhereUniqueInputObjectSchema).optional()
}).strict();
export const OptionCreateNestedOneWithoutReportsInputObjectSchema: z.ZodType<Prisma.OptionCreateNestedOneWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionCreateNestedOneWithoutReportsInput>;
export const OptionCreateNestedOneWithoutReportsInputObjectZodSchema = makeSchema();
