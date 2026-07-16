import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionWhereUniqueInputObjectSchema as VoteOptionWhereUniqueInputObjectSchema } from './VoteOptionWhereUniqueInput.schema';
import { VoteOptionUpdateWithoutOptionInputObjectSchema as VoteOptionUpdateWithoutOptionInputObjectSchema } from './VoteOptionUpdateWithoutOptionInput.schema';
import { VoteOptionUncheckedUpdateWithoutOptionInputObjectSchema as VoteOptionUncheckedUpdateWithoutOptionInputObjectSchema } from './VoteOptionUncheckedUpdateWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteOptionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VoteOptionUpdateWithoutOptionInputObjectSchema), z.lazy(() => VoteOptionUncheckedUpdateWithoutOptionInputObjectSchema)])
}).strict();
export const VoteOptionUpdateWithWhereUniqueWithoutOptionInputObjectSchema: z.ZodType<Prisma.VoteOptionUpdateWithWhereUniqueWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUpdateWithWhereUniqueWithoutOptionInput>;
export const VoteOptionUpdateWithWhereUniqueWithoutOptionInputObjectZodSchema = makeSchema();
