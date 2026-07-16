import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteWhereUniqueInputObjectSchema as VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteCreateWithoutCreatedByInputObjectSchema as VoteCreateWithoutCreatedByInputObjectSchema } from './VoteCreateWithoutCreatedByInput.schema';
import { VoteUncheckedCreateWithoutCreatedByInputObjectSchema as VoteUncheckedCreateWithoutCreatedByInputObjectSchema } from './VoteUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VoteCreateWithoutCreatedByInputObjectSchema), z.lazy(() => VoteUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const VoteCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.VoteCreateOrConnectWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteCreateOrConnectWithoutCreatedByInput>;
export const VoteCreateOrConnectWithoutCreatedByInputObjectZodSchema = makeSchema();
