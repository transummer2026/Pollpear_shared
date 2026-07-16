import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './BlockWhereUniqueInput.schema';
import { BlockCreateWithoutBlockedInputObjectSchema as BlockCreateWithoutBlockedInputObjectSchema } from './BlockCreateWithoutBlockedInput.schema';
import { BlockUncheckedCreateWithoutBlockedInputObjectSchema as BlockUncheckedCreateWithoutBlockedInputObjectSchema } from './BlockUncheckedCreateWithoutBlockedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BlockWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BlockCreateWithoutBlockedInputObjectSchema), z.lazy(() => BlockUncheckedCreateWithoutBlockedInputObjectSchema)])
}).strict();
export const BlockCreateOrConnectWithoutBlockedInputObjectSchema: z.ZodType<Prisma.BlockCreateOrConnectWithoutBlockedInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockCreateOrConnectWithoutBlockedInput>;
export const BlockCreateOrConnectWithoutBlockedInputObjectZodSchema = makeSchema();
