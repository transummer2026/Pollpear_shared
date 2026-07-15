import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './VoteOptionWhereUniqueInput.schema';
import { VoteOptionCreateWithoutOptionInputObjectSchema as VoteOptionCreateWithoutOptionInputObjectSchema } from './VoteOptionCreateWithoutOptionInput.schema';
import { VoteOptionUncheckedCreateWithoutOptionInputObjectSchema as VoteOptionUncheckedCreateWithoutOptionInputObjectSchema } from './VoteOptionUncheckedCreateWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteOptionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VoteOptionCreateWithoutOptionInputObjectSchema), z.lazy(() => VoteOptionUncheckedCreateWithoutOptionInputObjectSchema)])
}).strict();
export const VoteOptionCreateOrConnectWithoutOptionInputObjectSchema: z.ZodType<Prisma.VoteOptionCreateOrConnectWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionCreateOrConnectWithoutOptionInput>;
export const VoteOptionCreateOrConnectWithoutOptionInputObjectZodSchema = makeSchema();
