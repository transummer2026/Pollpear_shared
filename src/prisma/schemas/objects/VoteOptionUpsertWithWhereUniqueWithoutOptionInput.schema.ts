import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './VoteOptionWhereUniqueInput.schema';
import { VoteOptionUpdateWithoutOptionInputObjectSchema as VoteOptionUpdateWithoutOptionInputObjectSchema } from './VoteOptionUpdateWithoutOptionInput.schema';
import { VoteOptionUncheckedUpdateWithoutOptionInputObjectSchema as VoteOptionUncheckedUpdateWithoutOptionInputObjectSchema } from './VoteOptionUncheckedUpdateWithoutOptionInput.schema';
import { VoteOptionCreateWithoutOptionInputObjectSchema as VoteOptionCreateWithoutOptionInputObjectSchema } from './VoteOptionCreateWithoutOptionInput.schema';
import { VoteOptionUncheckedCreateWithoutOptionInputObjectSchema as VoteOptionUncheckedCreateWithoutOptionInputObjectSchema } from './VoteOptionUncheckedCreateWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteOptionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VoteOptionUpdateWithoutOptionInputObjectSchema), z.lazy(() => VoteOptionUncheckedUpdateWithoutOptionInputObjectSchema)]),
  create: z.union([z.lazy(() => VoteOptionCreateWithoutOptionInputObjectSchema), z.lazy(() => VoteOptionUncheckedCreateWithoutOptionInputObjectSchema)])
}).strict();
export const VoteOptionUpsertWithWhereUniqueWithoutOptionInputObjectSchema: z.ZodType<Prisma.VoteOptionUpsertWithWhereUniqueWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUpsertWithWhereUniqueWithoutOptionInput>;
export const VoteOptionUpsertWithWhereUniqueWithoutOptionInputObjectZodSchema = makeSchema();
