import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './BlockWhereUniqueInput.schema';
import { BlockUpdateWithoutBlockedInputObjectSchema as BlockUpdateWithoutBlockedInputObjectSchema } from './BlockUpdateWithoutBlockedInput.schema';
import { BlockUncheckedUpdateWithoutBlockedInputObjectSchema as BlockUncheckedUpdateWithoutBlockedInputObjectSchema } from './BlockUncheckedUpdateWithoutBlockedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BlockWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BlockUpdateWithoutBlockedInputObjectSchema), z.lazy(() => BlockUncheckedUpdateWithoutBlockedInputObjectSchema)])
}).strict();
export const BlockUpdateWithWhereUniqueWithoutBlockedInputObjectSchema: z.ZodType<Prisma.BlockUpdateWithWhereUniqueWithoutBlockedInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockUpdateWithWhereUniqueWithoutBlockedInput>;
export const BlockUpdateWithWhereUniqueWithoutBlockedInputObjectZodSchema = makeSchema();
