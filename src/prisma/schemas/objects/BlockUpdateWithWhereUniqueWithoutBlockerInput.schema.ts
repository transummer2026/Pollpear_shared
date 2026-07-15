import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './BlockWhereUniqueInput.schema';
import { BlockUpdateWithoutBlockerInputObjectSchema as BlockUpdateWithoutBlockerInputObjectSchema } from './BlockUpdateWithoutBlockerInput.schema';
import { BlockUncheckedUpdateWithoutBlockerInputObjectSchema as BlockUncheckedUpdateWithoutBlockerInputObjectSchema } from './BlockUncheckedUpdateWithoutBlockerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BlockWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BlockUpdateWithoutBlockerInputObjectSchema), z.lazy(() => BlockUncheckedUpdateWithoutBlockerInputObjectSchema)])
}).strict();
export const BlockUpdateWithWhereUniqueWithoutBlockerInputObjectSchema: z.ZodType<Prisma.BlockUpdateWithWhereUniqueWithoutBlockerInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockUpdateWithWhereUniqueWithoutBlockerInput>;
export const BlockUpdateWithWhereUniqueWithoutBlockerInputObjectZodSchema = makeSchema();
