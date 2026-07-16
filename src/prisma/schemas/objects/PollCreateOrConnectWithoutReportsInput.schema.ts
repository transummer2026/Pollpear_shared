import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollCreateWithoutReportsInputObjectSchema as PollCreateWithoutReportsInputObjectSchema } from './PollCreateWithoutReportsInput.schema';
import { PollUncheckedCreateWithoutReportsInputObjectSchema as PollUncheckedCreateWithoutReportsInputObjectSchema } from './PollUncheckedCreateWithoutReportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PollCreateWithoutReportsInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutReportsInputObjectSchema)])
}).strict();
export const PollCreateOrConnectWithoutReportsInputObjectSchema: z.ZodType<Prisma.PollCreateOrConnectWithoutReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateOrConnectWithoutReportsInput>;
export const PollCreateOrConnectWithoutReportsInputObjectZodSchema = makeSchema();
