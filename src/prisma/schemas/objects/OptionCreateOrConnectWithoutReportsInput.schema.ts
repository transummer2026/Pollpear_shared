import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { OptionWhereUniqueInputObjectSchema as OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema';
import { OptionCreateWithoutReportsInputObjectSchema as OptionCreateWithoutReportsInputObjectSchema } from './OptionCreateWithoutReportsInput.schema';
import { OptionUncheckedCreateWithoutReportsInputObjectSchema as OptionUncheckedCreateWithoutReportsInputObjectSchema } from './OptionUncheckedCreateWithoutReportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OptionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OptionCreateWithoutReportsInputObjectSchema), z.lazy(() => OptionUncheckedCreateWithoutReportsInputObjectSchema)])
}).strict();
export const OptionCreateOrConnectWithoutReportsInputObjectSchema: z.ZodType<Prisma.OptionCreateOrConnectWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.OptionCreateOrConnectWithoutReportsInput>;
export const OptionCreateOrConnectWithoutReportsInputObjectZodSchema = makeSchema();
