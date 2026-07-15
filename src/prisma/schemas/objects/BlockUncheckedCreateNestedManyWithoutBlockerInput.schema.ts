import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockCreateWithoutBlockerInputObjectSchema as BlockCreateWithoutBlockerInputObjectSchema } from './BlockCreateWithoutBlockerInput.schema';
import { BlockUncheckedCreateWithoutBlockerInputObjectSchema as BlockUncheckedCreateWithoutBlockerInputObjectSchema } from './BlockUncheckedCreateWithoutBlockerInput.schema';
import { BlockCreateOrConnectWithoutBlockerInputObjectSchema as BlockCreateOrConnectWithoutBlockerInputObjectSchema } from './BlockCreateOrConnectWithoutBlockerInput.schema';
import { BlockCreateManyBlockerInputEnvelopeObjectSchema as BlockCreateManyBlockerInputEnvelopeObjectSchema } from './BlockCreateManyBlockerInputEnvelope.schema';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './BlockWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BlockCreateWithoutBlockerInputObjectSchema), z.lazy(() => BlockCreateWithoutBlockerInputObjectSchema).array(), z.lazy(() => BlockUncheckedCreateWithoutBlockerInputObjectSchema), z.lazy(() => BlockUncheckedCreateWithoutBlockerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BlockCreateOrConnectWithoutBlockerInputObjectSchema), z.lazy(() => BlockCreateOrConnectWithoutBlockerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BlockCreateManyBlockerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BlockWhereUniqueInputObjectSchema), z.lazy(() => BlockWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BlockUncheckedCreateNestedManyWithoutBlockerInputObjectSchema: z.ZodType<Prisma.BlockUncheckedCreateNestedManyWithoutBlockerInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockUncheckedCreateNestedManyWithoutBlockerInput>;
export const BlockUncheckedCreateNestedManyWithoutBlockerInputObjectZodSchema = makeSchema();
