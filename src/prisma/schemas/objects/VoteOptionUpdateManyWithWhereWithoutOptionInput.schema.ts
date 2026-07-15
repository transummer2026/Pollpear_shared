import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteOptionScalarWhereInputObjectSchema as VoteOptionScalarWhereInputObjectSchema } from './VoteOptionScalarWhereInput.schema';
import { VoteOptionUpdateManyMutationInputObjectSchema as VoteOptionUpdateManyMutationInputObjectSchema } from './VoteOptionUpdateManyMutationInput.schema';
import { VoteOptionUncheckedUpdateManyWithoutOptionInputObjectSchema as VoteOptionUncheckedUpdateManyWithoutOptionInputObjectSchema } from './VoteOptionUncheckedUpdateManyWithoutOptionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteOptionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VoteOptionUpdateManyMutationInputObjectSchema), z.lazy(() => VoteOptionUncheckedUpdateManyWithoutOptionInputObjectSchema)])
}).strict();
export const VoteOptionUpdateManyWithWhereWithoutOptionInputObjectSchema: z.ZodType<Prisma.VoteOptionUpdateManyWithWhereWithoutOptionInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteOptionUpdateManyWithWhereWithoutOptionInput>;
export const VoteOptionUpdateManyWithWhereWithoutOptionInputObjectZodSchema = makeSchema();
