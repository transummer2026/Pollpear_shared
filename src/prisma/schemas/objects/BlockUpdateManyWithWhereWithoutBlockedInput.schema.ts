import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockScalarWhereInputObjectSchema as BlockScalarWhereInputObjectSchema } from './BlockScalarWhereInput.schema';
import { BlockUpdateManyMutationInputObjectSchema as BlockUpdateManyMutationInputObjectSchema } from './BlockUpdateManyMutationInput.schema';
import { BlockUncheckedUpdateManyWithoutBlockedInputObjectSchema as BlockUncheckedUpdateManyWithoutBlockedInputObjectSchema } from './BlockUncheckedUpdateManyWithoutBlockedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BlockScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BlockUpdateManyMutationInputObjectSchema), z.lazy(() => BlockUncheckedUpdateManyWithoutBlockedInputObjectSchema)])
}).strict();
export const BlockUpdateManyWithWhereWithoutBlockedInputObjectSchema: z.ZodType<Prisma.BlockUpdateManyWithWhereWithoutBlockedInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockUpdateManyWithWhereWithoutBlockedInput>;
export const BlockUpdateManyWithWhereWithoutBlockedInputObjectZodSchema = makeSchema();
