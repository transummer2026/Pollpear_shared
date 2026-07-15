import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockCreateWithoutBlockedInputObjectSchema as BlockCreateWithoutBlockedInputObjectSchema } from './BlockCreateWithoutBlockedInput.schema';
import { BlockUncheckedCreateWithoutBlockedInputObjectSchema as BlockUncheckedCreateWithoutBlockedInputObjectSchema } from './BlockUncheckedCreateWithoutBlockedInput.schema';
import { BlockCreateOrConnectWithoutBlockedInputObjectSchema as BlockCreateOrConnectWithoutBlockedInputObjectSchema } from './BlockCreateOrConnectWithoutBlockedInput.schema';
import { BlockCreateManyBlockedInputEnvelopeObjectSchema as BlockCreateManyBlockedInputEnvelopeObjectSchema } from './BlockCreateManyBlockedInputEnvelope.schema';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './BlockWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BlockCreateWithoutBlockedInputObjectSchema), z.lazy(() => BlockCreateWithoutBlockedInputObjectSchema).array(), z.lazy(() => BlockUncheckedCreateWithoutBlockedInputObjectSchema), z.lazy(() => BlockUncheckedCreateWithoutBlockedInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BlockCreateOrConnectWithoutBlockedInputObjectSchema), z.lazy(() => BlockCreateOrConnectWithoutBlockedInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BlockCreateManyBlockedInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BlockWhereUniqueInputObjectSchema), z.lazy(() => BlockWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BlockCreateNestedManyWithoutBlockedInputObjectSchema: z.ZodType<Prisma.BlockCreateNestedManyWithoutBlockedInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockCreateNestedManyWithoutBlockedInput>;
export const BlockCreateNestedManyWithoutBlockedInputObjectZodSchema = makeSchema();
