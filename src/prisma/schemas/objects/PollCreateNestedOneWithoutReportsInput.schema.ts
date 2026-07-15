import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollCreateWithoutReportsInputObjectSchema as PollCreateWithoutReportsInputObjectSchema } from './PollCreateWithoutReportsInput.schema';
import { PollUncheckedCreateWithoutReportsInputObjectSchema as PollUncheckedCreateWithoutReportsInputObjectSchema } from './PollUncheckedCreateWithoutReportsInput.schema';
import { PollCreateOrConnectWithoutReportsInputObjectSchema as PollCreateOrConnectWithoutReportsInputObjectSchema } from './PollCreateOrConnectWithoutReportsInput.schema';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PollCreateWithoutReportsInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PollCreateOrConnectWithoutReportsInputObjectSchema).optional(),
  connect: z.lazy(() => PollWhereUniqueInputObjectSchema).optional()
}).strict();
export const PollCreateNestedOneWithoutReportsInputObjectSchema: z.ZodType<Prisma.PollCreateNestedOneWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateNestedOneWithoutReportsInput>;
export const PollCreateNestedOneWithoutReportsInputObjectZodSchema = makeSchema();
