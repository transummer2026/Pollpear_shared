import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { PollScalarWhereInputObjectSchema as PollScalarWhereInputObjectSchema } from './PollScalarWhereInput.schema';
import { PollUpdateManyMutationInputObjectSchema as PollUpdateManyMutationInputObjectSchema } from './PollUpdateManyMutationInput.schema';
import { PollUncheckedUpdateManyWithoutCreatedByInputObjectSchema as PollUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './PollUncheckedUpdateManyWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PollScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PollUpdateManyMutationInputObjectSchema), z.lazy(() => PollUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const PollUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.PollUpdateManyWithWhereWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.PollUpdateManyWithWhereWithoutCreatedByInput>;
export const PollUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = makeSchema();
