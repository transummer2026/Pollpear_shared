import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollWhereUniqueInputObjectSchema as PollWhereUniqueInputObjectSchema } from './PollWhereUniqueInput.schema';
import { PollCreateWithoutCreatedByInputObjectSchema as PollCreateWithoutCreatedByInputObjectSchema } from './PollCreateWithoutCreatedByInput.schema';
import { PollUncheckedCreateWithoutCreatedByInputObjectSchema as PollUncheckedCreateWithoutCreatedByInputObjectSchema } from './PollUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PollCreateWithoutCreatedByInputObjectSchema), z.lazy(() => PollUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const PollCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PollCreateOrConnectWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.PollCreateOrConnectWithoutCreatedByInput>;
export const PollCreateOrConnectWithoutCreatedByInputObjectZodSchema = makeSchema();
