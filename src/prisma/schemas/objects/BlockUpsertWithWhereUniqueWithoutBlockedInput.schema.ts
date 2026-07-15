import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './BlockWhereUniqueInput.schema';
import { BlockUpdateWithoutBlockedInputObjectSchema as BlockUpdateWithoutBlockedInputObjectSchema } from './BlockUpdateWithoutBlockedInput.schema';
import { BlockUncheckedUpdateWithoutBlockedInputObjectSchema as BlockUncheckedUpdateWithoutBlockedInputObjectSchema } from './BlockUncheckedUpdateWithoutBlockedInput.schema';
import { BlockCreateWithoutBlockedInputObjectSchema as BlockCreateWithoutBlockedInputObjectSchema } from './BlockCreateWithoutBlockedInput.schema';
import { BlockUncheckedCreateWithoutBlockedInputObjectSchema as BlockUncheckedCreateWithoutBlockedInputObjectSchema } from './BlockUncheckedCreateWithoutBlockedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BlockWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BlockUpdateWithoutBlockedInputObjectSchema), z.lazy(() => BlockUncheckedUpdateWithoutBlockedInputObjectSchema)]),
  create: z.union([z.lazy(() => BlockCreateWithoutBlockedInputObjectSchema), z.lazy(() => BlockUncheckedCreateWithoutBlockedInputObjectSchema)])
}).strict();
export const BlockUpsertWithWhereUniqueWithoutBlockedInputObjectSchema: z.ZodType<Prisma.BlockUpsertWithWhereUniqueWithoutBlockedInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockUpsertWithWhereUniqueWithoutBlockedInput>;
export const BlockUpsertWithWhereUniqueWithoutBlockedInputObjectZodSchema = makeSchema();
