import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './BlockWhereUniqueInput.schema';
import { BlockUpdateWithoutBlockerInputObjectSchema as BlockUpdateWithoutBlockerInputObjectSchema } from './BlockUpdateWithoutBlockerInput.schema';
import { BlockUncheckedUpdateWithoutBlockerInputObjectSchema as BlockUncheckedUpdateWithoutBlockerInputObjectSchema } from './BlockUncheckedUpdateWithoutBlockerInput.schema';
import { BlockCreateWithoutBlockerInputObjectSchema as BlockCreateWithoutBlockerInputObjectSchema } from './BlockCreateWithoutBlockerInput.schema';
import { BlockUncheckedCreateWithoutBlockerInputObjectSchema as BlockUncheckedCreateWithoutBlockerInputObjectSchema } from './BlockUncheckedCreateWithoutBlockerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BlockWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BlockUpdateWithoutBlockerInputObjectSchema), z.lazy(() => BlockUncheckedUpdateWithoutBlockerInputObjectSchema)]),
  create: z.union([z.lazy(() => BlockCreateWithoutBlockerInputObjectSchema), z.lazy(() => BlockUncheckedCreateWithoutBlockerInputObjectSchema)])
}).strict();
export const BlockUpsertWithWhereUniqueWithoutBlockerInputObjectSchema: z.ZodType<Prisma.BlockUpsertWithWhereUniqueWithoutBlockerInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockUpsertWithWhereUniqueWithoutBlockerInput>;
export const BlockUpsertWithWhereUniqueWithoutBlockerInputObjectZodSchema = makeSchema();
