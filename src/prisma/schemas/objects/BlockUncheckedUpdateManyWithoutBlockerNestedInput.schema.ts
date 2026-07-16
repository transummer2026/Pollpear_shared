import * as z from 'zod';
import type { Prisma } from '../../../../../src/generated/prisma/client';
import { BlockCreateWithoutBlockerInputObjectSchema as BlockCreateWithoutBlockerInputObjectSchema } from './BlockCreateWithoutBlockerInput.schema';
import { BlockUncheckedCreateWithoutBlockerInputObjectSchema as BlockUncheckedCreateWithoutBlockerInputObjectSchema } from './BlockUncheckedCreateWithoutBlockerInput.schema';
import { BlockCreateOrConnectWithoutBlockerInputObjectSchema as BlockCreateOrConnectWithoutBlockerInputObjectSchema } from './BlockCreateOrConnectWithoutBlockerInput.schema';
import { BlockUpsertWithWhereUniqueWithoutBlockerInputObjectSchema as BlockUpsertWithWhereUniqueWithoutBlockerInputObjectSchema } from './BlockUpsertWithWhereUniqueWithoutBlockerInput.schema';
import { BlockCreateManyBlockerInputEnvelopeObjectSchema as BlockCreateManyBlockerInputEnvelopeObjectSchema } from './BlockCreateManyBlockerInputEnvelope.schema';
import { BlockWhereUniqueInputObjectSchema as BlockWhereUniqueInputObjectSchema } from './BlockWhereUniqueInput.schema';
import { BlockUpdateWithWhereUniqueWithoutBlockerInputObjectSchema as BlockUpdateWithWhereUniqueWithoutBlockerInputObjectSchema } from './BlockUpdateWithWhereUniqueWithoutBlockerInput.schema';
import { BlockUpdateManyWithWhereWithoutBlockerInputObjectSchema as BlockUpdateManyWithWhereWithoutBlockerInputObjectSchema } from './BlockUpdateManyWithWhereWithoutBlockerInput.schema';
import { BlockScalarWhereInputObjectSchema as BlockScalarWhereInputObjectSchema } from './BlockScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BlockCreateWithoutBlockerInputObjectSchema), z.lazy(() => BlockCreateWithoutBlockerInputObjectSchema).array(), z.lazy(() => BlockUncheckedCreateWithoutBlockerInputObjectSchema), z.lazy(() => BlockUncheckedCreateWithoutBlockerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BlockCreateOrConnectWithoutBlockerInputObjectSchema), z.lazy(() => BlockCreateOrConnectWithoutBlockerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BlockUpsertWithWhereUniqueWithoutBlockerInputObjectSchema), z.lazy(() => BlockUpsertWithWhereUniqueWithoutBlockerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BlockCreateManyBlockerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BlockWhereUniqueInputObjectSchema), z.lazy(() => BlockWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BlockWhereUniqueInputObjectSchema), z.lazy(() => BlockWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BlockWhereUniqueInputObjectSchema), z.lazy(() => BlockWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BlockWhereUniqueInputObjectSchema), z.lazy(() => BlockWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BlockUpdateWithWhereUniqueWithoutBlockerInputObjectSchema), z.lazy(() => BlockUpdateWithWhereUniqueWithoutBlockerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BlockUpdateManyWithWhereWithoutBlockerInputObjectSchema), z.lazy(() => BlockUpdateManyWithWhereWithoutBlockerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BlockScalarWhereInputObjectSchema), z.lazy(() => BlockScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BlockUncheckedUpdateManyWithoutBlockerNestedInputObjectSchema: z.ZodType<Prisma.BlockUncheckedUpdateManyWithoutBlockerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BlockUncheckedUpdateManyWithoutBlockerNestedInput>;
export const BlockUncheckedUpdateManyWithoutBlockerNestedInputObjectZodSchema = makeSchema();
