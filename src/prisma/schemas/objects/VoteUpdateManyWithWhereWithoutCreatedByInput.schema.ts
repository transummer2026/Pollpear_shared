import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { VoteScalarWhereInputObjectSchema as VoteScalarWhereInputObjectSchema } from './VoteScalarWhereInput.schema';
import { VoteUpdateManyMutationInputObjectSchema as VoteUpdateManyMutationInputObjectSchema } from './VoteUpdateManyMutationInput.schema';
import { VoteUncheckedUpdateManyWithoutCreatedByInputObjectSchema as VoteUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './VoteUncheckedUpdateManyWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VoteScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VoteUpdateManyMutationInputObjectSchema), z.lazy(() => VoteUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const VoteUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.VoteUpdateManyWithWhereWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.VoteUpdateManyWithWhereWithoutCreatedByInput>;
export const VoteUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = makeSchema();
