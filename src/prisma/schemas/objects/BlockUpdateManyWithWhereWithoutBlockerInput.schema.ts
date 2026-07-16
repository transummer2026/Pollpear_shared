import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockScalarWhereInputObjectSchema as BlockScalarWhereInputObjectSchema } from './BlockScalarWhereInput.schema';
import { BlockUpdateManyMutationInputObjectSchema as BlockUpdateManyMutationInputObjectSchema } from './BlockUpdateManyMutationInput.schema';
import { BlockUncheckedUpdateManyWithoutBlockerInputObjectSchema as BlockUncheckedUpdateManyWithoutBlockerInputObjectSchema } from './BlockUncheckedUpdateManyWithoutBlockerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BlockScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BlockUpdateManyMutationInputObjectSchema), z.lazy(() => BlockUncheckedUpdateManyWithoutBlockerInputObjectSchema)])
}).strict();
export const BlockUpdateManyWithWhereWithoutBlockerInputObjectSchema: z.ZodType<Prisma.BlockUpdateManyWithWhereWithoutBlockerInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockUpdateManyWithWhereWithoutBlockerInput>;
export const BlockUpdateManyWithWhereWithoutBlockerInputObjectZodSchema = makeSchema();
