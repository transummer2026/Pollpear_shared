import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './BlockWhereUniqueInput.schema';
import { BlockCreateWithoutBlockerInputObjectSchema as BlockCreateWithoutBlockerInputObjectSchema } from './BlockCreateWithoutBlockerInput.schema';
import { BlockUncheckedCreateWithoutBlockerInputObjectSchema as BlockUncheckedCreateWithoutBlockerInputObjectSchema } from './BlockUncheckedCreateWithoutBlockerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BlockWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BlockCreateWithoutBlockerInputObjectSchema), z.lazy(() => BlockUncheckedCreateWithoutBlockerInputObjectSchema)])
}).strict();
export const BlockCreateOrConnectWithoutBlockerInputObjectSchema: z.ZodType<Prisma.BlockCreateOrConnectWithoutBlockerInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockCreateOrConnectWithoutBlockerInput>;
export const BlockCreateOrConnectWithoutBlockerInputObjectZodSchema = makeSchema();
